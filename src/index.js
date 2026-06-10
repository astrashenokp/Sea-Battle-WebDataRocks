import './style.css';
import { generateRandomFleet, generateEmptyBoard, initWebDataRocks } from './gameBoard';

const statusElement = document.getElementById('game-status');
const randomizeBtn = document.getElementById('randomize-btn');
const readyBtn = document.getElementById('ready-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const controls = document.getElementById('controls');

let myBoardData = generateRandomFleet();
let enemyBoardData = generateEmptyBoard();

let myPivot = null;
let enemyPivot = null;
let ws = null;
let myPlayerId = null;

let isMyTurn = false;
let enemyHitsOnMe = 0;
let gameStarted = false;
let amIReady = false;

const bgMusic = new Audio('./music.mp3');
bgMusic.loop = true;

const formatCoord = (x, y) => `(${x}, ${y})`;

const showGameControls = () => {
    if (controls) controls.style.display = 'flex';
    if (randomizeBtn) randomizeBtn.style.display = '';
    if (readyBtn) readyBtn.style.display = '';
    if (playAgainBtn) playAgainBtn.style.display = 'none';
};

const showPlayAgain = () => {
    if (controls) controls.style.display = 'flex';
    if (randomizeBtn) randomizeBtn.style.display = 'none';
    if (readyBtn) readyBtn.style.display = 'none';
    if (playAgainBtn) playAgainBtn.style.display = 'inline-block';
};

const resetLocalGame = () => {
    myBoardData = generateRandomFleet();
    enemyBoardData = generateEmptyBoard();
    myPlayerId = null;
    isMyTurn = false;
    enemyHitsOnMe = 0;
    gameStarted = false;
    amIReady = false;

    if (myPivot) myPivot.updateData({ data: myBoardData });
    if (enemyPivot) enemyPivot.updateData({ data: enemyBoardData });
    if (randomizeBtn) randomizeBtn.disabled = false;
    if (readyBtn) readyBtn.disabled = !(ws && ws.readyState === WebSocket.OPEN);

    showGameControls();
    statusElement.innerText = 'New round! Prepare your fleet and click Ready.';
    statusElement.style.backgroundColor = '#e3f2fd';
};

document.addEventListener('click', () => {
    bgMusic.play().catch(() => {});
}, { once: true });

window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';
});

if (randomizeBtn) {
    randomizeBtn.addEventListener('click', () => {
        if (!amIReady && !gameStarted) {
            myBoardData = generateRandomFleet();
            myPivot.updateData({ data: myBoardData });
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

if (playAgainBtn) {
    playAgainBtn.addEventListener('click', () => {
        resetLocalGame();

        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: 'PLAY_AGAIN' }));
        }
    });
}

const wsUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'ws://localhost:8080'
    : `${window.location.protocol === 'https:' ? 'wss' : 'ws'}://${window.location.host}`;

ws = new WebSocket(wsUrl);

ws.onopen = () => {
    statusElement.innerText = 'Connected! Waiting for opponent...';
    statusElement.style.backgroundColor = '#fff3e0';
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === 'connected') {
        statusElement.innerText = data.message;
        statusElement.style.backgroundColor = '#e3f2fd';
        if (!gameStarted && !amIReady) showGameControls();
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
        showPlayAgain();
    }
    else if (data.type === 'PLAY_AGAIN') {
        resetLocalGame();
    }
    else if (data.type === 'SHOOT') {
        if (data.playerId !== myPlayerId) {
            const targetCell = myBoardData.find(c => c.x === data.x && c.y === data.y);
            let isHit = false;
            let sunkSurrounding = [];

            if (targetCell) {
                if (targetCell.status === 1 || targetCell.status === 3) {
                    targetCell.status = 3;
                    isHit = true;
                    enemyHitsOnMe++;

                    if (targetCell.shipId) {
                        const shipCells = myBoardData.filter(c => c.shipId === targetCell.shipId);
                        const isSunk = shipCells.every(c => c.status === 3);

                        if (isSunk) {
                            shipCells.forEach(sc => {
                                const shipX = parseInt(sc.x);
                                const shipY = parseInt(sc.y);
                                for (let dx = -1; dx <= 1; dx++) {
                                    for (let dy = -1; dy <= 1; dy++) {
                                        const nx = shipX + dx;
                                        const ny = shipY + dy;
                                        if (nx >= 1 && nx <= 10 && ny >= 1 && ny <= 10) {
                                            const adjCell = myBoardData.find(c => c.x === String(nx) && c.y === String(ny));
                                            if (adjCell && adjCell.status === 0) {
                                                adjCell.status = 2;
                                                sunkSurrounding.push({ x: adjCell.x, y: adjCell.y });
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    }
                } else {
                    targetCell.status = 2;
                }
                myPivot.updateData({ data: myBoardData });
            }

            ws.send(JSON.stringify({
                type: 'RESULT',
                playerId: myPlayerId,
                x: data.x,
                y: data.y,
                hit: isHit,
                gameOver: enemyHitsOnMe >= 20,
                sunkSurrounding: sunkSurrounding
            }));

            if (enemyHitsOnMe >= 20) {
                statusElement.innerText = 'FLEET DESTROYED! You lose...';
                statusElement.style.backgroundColor = '#ffcdd2';
                isMyTurn = false;
                gameStarted = false;
                showPlayAgain();
            } else {
                if (isHit) {
                    isMyTurn = false;
                    statusElement.innerText = `Enemy HIT at ${formatCoord(data.x, data.y)}! They get another turn.`;
                    statusElement.style.backgroundColor = '#ffe082';
                } else {
                    isMyTurn = true;
                    statusElement.innerText = `Enemy missed at ${formatCoord(data.x, data.y)}. Your turn!`;
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
            }

            if (data.sunkSurrounding && data.sunkSurrounding.length > 0) {
                data.sunkSurrounding.forEach(coord => {
                    const adjCell = enemyBoardData.find(c => c.x === coord.x && c.y === coord.y);
                    if (adjCell) {
                        adjCell.status = 2;
                    }
                });
            }
            enemyPivot.updateData({ data: enemyBoardData });

            if (data.gameOver) {
                statusElement.innerText = 'VICTORY! Enemy fleet destroyed!';
                statusElement.style.backgroundColor = '#c8e6c9';
                isMyTurn = false;
                gameStarted = false;
                showPlayAgain();
            } else {
                if (data.hit) {
                    isMyTurn = true;
                    statusElement.innerText = `You HIT at ${formatCoord(data.x, data.y)}! Shoot again!`;
                    statusElement.style.backgroundColor = '#c8e6c9';
                } else {
                    isMyTurn = false;
                    statusElement.innerText = `You missed at ${formatCoord(data.x, data.y)}. Waiting for opponent...`;
                    statusElement.style.backgroundColor = '#ffe082';
                }
            }
        }
    }
};

myPivot = initWebDataRocks("#board-mine", myBoardData, null);

enemyPivot = initWebDataRocks("#board-enemy", enemyBoardData, (x, y) => {
    if (!gameStarted) {
        alert("Game hasn't started yet! Press Ready and wait for opponent.");
        return;
    }
    if (!isMyTurn) {
        alert("It's the opponent's turn! Please wait.");
        return;
    }

    isMyTurn = false;
    statusElement.innerText = `Shooting at ${formatCoord(x, y)}...`;
    statusElement.style.backgroundColor = '#e3f2fd';

    ws.send(JSON.stringify({
        type: 'SHOOT',
        playerId: myPlayerId,
        x: x,
        y: y
    }));
});
