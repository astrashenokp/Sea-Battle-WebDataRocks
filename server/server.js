const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
let players = [];
wss.on('connection', (ws) => {
    if (players.length >= 2) {
        ws.send(JSON.stringify({ type: 'error', message: 'Room is full. Game is already in progress.' }));
        ws.close();
        return;
    }

    players.push(ws);
    console.log('Player connected. Total players:', players.length);

    if (players.length === 2) {
        console.log('Starting game with 2 players.');
        players.forEach((player, index) => {
            player.send(JSON.stringify({ 
                type: 'start', 
                player: index + 1, 
                message: index === 0 ? 'Game started! Your turn (Player 1).' : 'Game started! Opponent\'s turn (Player 2).' 
            }));
        });
    }

    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);
        players.forEach((player) => {
            if (player !== ws && player.readyState === WebSocket.OPEN) {
                player.send(JSON.stringify(parsedMessage));
            }
        });
    });

    ws.on('close', () => {
        players = players.filter(player => player !== ws);
        console.log('Player disconnected. Total players:', players.length);
        
        players.forEach((player) => {
            if (player.readyState === WebSocket.OPEN) {
                player.send(JSON.stringify({ type: 'DISCONNECT', message: 'Opponent disconnected! Game over.' }));
            }
        });
    });
});

console.log('WebSocket server is running on ws://localhost:8080');