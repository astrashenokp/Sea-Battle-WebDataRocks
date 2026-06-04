import './style.css';
import { generateEmptyBoard, initWebDataRocks } from './gameBoard';

console.log('Game client is running');

const statusElement = document.getElementById('game-status');
if (statusElement) statusElement.innerText = 'Waiting for game settings...';

let myBoardData = generateEmptyBoard();

// test ship
myBoardData.forEach(cell => {
    if (cell.x === '3' && cell.y === 'C') cell.status = 1;
    if (cell.x === '4' && cell.y === 'C') cell.status = 1;
    if (cell.x === '5' && cell.y === 'C') cell.status = 1;
});

let pivot = null;
let ws = null;
let myPlayerId = null;

ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    statusElement.innerText = 'Connected to server. Waiting for other player...';
    statusElement.style.backgroundColor = '#fff3e0';
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === 'start') {
        myPlayerId = data.player;
        statusElement.innerText = data.message;
        statusElement.style.backgroundColor = '#e8f5e9';
        } 
    else if (data.type === 'error' || data.type === 'DISCONNECT') {
        statusElement.innerText = data.message;
        statusElement.style.backgroundColor = '#ffebee';
    }
    else if (data.type === 'SHOOT') {
        const targetCell = myBoardData.find(c => c.x === data.x && c.y === data.y);
        if (targetCell) {
            if (targetCell.status === 1 || targetCell.status === 3) {
                targetCell.status = 3;
                } else {
                targetCell.status = 2;
            }

            pivot.updateData({ data: myBoardData });
            if (data.playerId === myPlayerId) {
                statusElement.innerText = `You hit ${data.x}${data.y}!`;
                } else {
                statusElement.innerText = `Opponent hit ${data.x}${data.y}!`;
            }
        }
    }
};

pivot = initWebDataRocks("#wdr-component", myBoardData, (x, y) => {
    if (!myPlayerId) {
        alert('Game has not started yet!');
        return;
    }

    ws.send(JSON.stringify({
        type: 'SHOOT',
        playerId: myPlayerId,
        x: x,
        y: y
    }));
});
