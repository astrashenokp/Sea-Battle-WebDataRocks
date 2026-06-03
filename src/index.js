import './style.css';
import { generateEmptyBoard, initWebDataRocks } from './gameBoard';

console.log('Game client is running');

const statusElement = document.getElementById('game-status');
statusElement.innerText = 'Waiting for game settings...';

let myBoardData = generateEmptyBoard();

myBoardData.forEach(cell => {
    if (cell.x === '3' && cell.y === 'C') cell.status = 1;
    if (cell.x === '4' && cell.y === 'C') cell.status = 1;
    if (cell.x === '5' && cell.y === 'C') cell.status = 1;
});

const pivot = initWebDataRocks("#wdr-component", myBoardData, (x, y) => {
    console.log(`Shot at: ${x}${y}`);
});