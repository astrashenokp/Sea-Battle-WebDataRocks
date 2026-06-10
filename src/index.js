import './style.css';
import { generateRandomFleet, generateEmptyBoard, initBoard } from './gameBoard';

const statusElement = document.getElementById('game-status');
const randomizeBtn = document.getElementById('randomize-btn');
const readyBtn = document.getElementById('ready-btn');
const controls = document.getElementById('controls');

let myBoardData = generateRandomFleet();
let enemyBoardData = generateEmptyBoard();

let myBoard = null;
let enemyBoard = null;
let ws = null;
let myPlayerId = null;

let isMyTurn = false;
let enemyHitsOnMe = 0;
let gameStarted = false;
let amIReady = false;

window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';
});

if (randomizeBtn) {
    randomizeBtn.addEventListener('click', () => {
        if (!amIReady && !gameStarted) {
            myBoardData = generateRandomFleet();
            myBoard.updateData(myBoardData);
        }
    });
}

if (readyBtn) {
    readyBtn.addEventListener('click', () => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            amIReady = true;
            randomizeBtn.disabled = true;
            readyBtn.disabled = true;
            statusElement.innerText = 'Waiting for opponent to get ready...';
            statusElement.style.backgroundColor = '#fff3e0';
            ws.send(JSON.stringify({ type: 'READY' }));
        }
    });
}

ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    statusElement.innerText = 'Connected! Waiting for opponent...';
    statusElement.style.backgroundColor = '#fff3e0';
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === 'connected') {
        statusElement.innerText = data.message;
        statusElement.style.backgroundColor = '#e3f2fd';
        if (!amIReady && readyBtn) readyBtn.disabled = false;
    }
    else if (data.type === 'OPPONENT_READY') {
        if (!amIReady) {
            statusElement.innerText = 'Opponent is ready! Click Ready to start.';
            statusElement.style.backgroundColor = '#fff9c4';
        }
    }
    else if (data.type === 'start') {
        gameStarted = true;
        myPlayerId = data.player;
        isMyTurn = (myPlayerId === 1);
        statusElement.innerText = data.message;
        statusElement.style.backgroundColor = isMyTurn ? '#c8e6c9' : '#ffe082';
        if (controls) controls.style.display = 'none';
    }
    else if (data.type === 'error' || data.type === 'DISCONNECT') {
        statusElement.innerText = data.message;
        statusElement.style.backgroundColor = '#ffebee';
        isMyTurn = false;
        gameStarted = false;
    }
    else if (data.type === 'SHOOT') {
        if (data.playerId !== myPlayerId) {
            const targetCell = myBoardData.find(c => c.x === data.x && c.y === data.y);
            let isHit = false;

            if (targetCell) {
                if (targetCell.status === 1 || targetCell.status === 3) {
                    targetCell.status = 3;
                    isHit = true;
                    enemyHitsOnMe++;
                } else {
                    targetCell.status = 2;
                }
                myBoard.updateData(myBoardData);
            }

            ws.send(JSON.stringify({
                type: 'RESULT',
                playerId: myPlayerId,
                x: data.x,
                y: data.y,
                hit: isHit,
                gameOver: enemyHitsOnMe >= 20
            }));

            if (enemyHitsOnMe >= 20) {
                statusElement.innerText = 'FLEET DESTROYED! You lose...';
                statusElement.style.backgroundColor = '#ffcdd2';
                isMyTurn = false;
            } else {
                if (isHit) {
                    isMyTurn = false;
                    statusElement.innerText = `Enemy HIT at ${data.x}${data.y}! They get another turn.`;
                    statusElement.style.backgroundColor = '#ffe082';
                } else {
                    isMyTurn = true;
                    statusElement.innerText = `Enemy missed at ${data.x}${data.y}. Your turn!`;
                    statusElement.style.backgroundColor = '#c8e6c9';
                }
            }
        }
    }
    else if (data.type === 'RESULT') {
        if (data.playerId !== myPlayerId) {
            const targetCell = enemyBoardData.find(c => c.x === data.x && c.y === data.y);
            if (targetCell) {
                targetCell.status = data.hit ? 3 : 2;
                enemyBoard.updateData(enemyBoardData);
            }

            if (data.gameOver) {
                statusElement.innerText = 'VICTORY! Enemy fleet destroyed!';
                statusElement.style.backgroundColor = '#c8e6c9';
                isMyTurn = false;
            } else {
                if (data.hit) {
                    isMyTurn = true;
                    statusElement.innerText = `You HIT at ${data.x}${data.y}! Shoot again!`;
                    statusElement.style.backgroundColor = '#c8e6c9';
                } else {
                    isMyTurn = false;
                    statusElement.innerText = `You missed at ${data.x}${data.y}. Waiting for opponent...`;
                    statusElement.style.backgroundColor = '#ffe082';
                }
            }
        }
    }
};

myBoard = initBoard('#board-mine', myBoardData, null);

enemyBoard = initBoard('#board-enemy', enemyBoardData, (x, y) => {
    if (!gameStarted) {
        alert("Game hasn't started yet! Press Ready and wait for opponent.");
        return;
    }
    if (!isMyTurn) {
        alert("It's the opponent's turn! Please wait.");
        return;
    }

    isMyTurn = false;
    statusElement.innerText = `Shooting at ${x}${y}...`;
    statusElement.style.backgroundColor = '#e3f2fd';

    ws.send(JSON.stringify({
        type: 'SHOOT',
        playerId: myPlayerId,
        x: x,
        y: y
    }));
});