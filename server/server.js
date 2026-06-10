const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
let players = [];
wss.on('connection', (ws) => {
    if (players.length >= 2) {
        ws.send(JSON.stringify({ type: 'error', message: 'Room is full. Game is already in progress.' }));
        ws.close();
        return;
    }

    ws.isReady = false;
    players.push(ws);

    if (players.length === 2) {
        players.forEach((player) => {
            player.send(JSON.stringify({ type: 'connected', message: 'Opponent found! Prepare your fleet and click Ready.' }));
        });
    }

    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);

        if (parsedMessage.type === 'READY') {
            ws.isReady = true;
            if (players.length === 2 && players[0].isReady && players[1].isReady) {
                players.forEach((player, index) => {
                    player.send(JSON.stringify({ 
                        type: 'start', 
                        player: index + 1, 
                        message: index === 0 ? 'Game started! Your turn (Player 1).' : 'Game started! Opponent\'s turn (Player 2).' 
                    }));
                });
            } else {
                players.forEach((player) => {
                    if (player !== ws && player.readyState === WebSocket.OPEN) {
                        player.send(JSON.stringify({ type: 'OPPONENT_READY' }));
                    }
                });
            }
        } else {
            players.forEach((player) => {
                if (player !== ws && player.readyState === WebSocket.OPEN) {
                    player.send(JSON.stringify(parsedMessage));
                }
            });
        }
    });

    ws.on('close', () => {
        players = players.filter(player => player !== ws);
        players.forEach((player) => {
            if (player.readyState === WebSocket.OPEN) {
                player.send(JSON.stringify({ type: 'DISCONNECT', message: 'Opponent disconnected! Game over.' }));
            }
        });
    });
});