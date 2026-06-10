const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

const port = process.env.PORT || 8080;
const distDir = path.join(__dirname, '..', 'dist');

const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.mp3': 'audio/mpeg'
};

const server = http.createServer((req, res) => {
    const requestPath = req.url === '/' ? '/index.html' : decodeURIComponent(req.url.split('?')[0]);
    const filePath = path.join(distDir, requestPath);
    const resolvedPath = path.resolve(filePath);

    if (!resolvedPath.startsWith(path.resolve(distDir))) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.readFile(resolvedPath, (error, content) => {
        if (error) {
            fs.readFile(path.join(distDir, 'index.html'), (fallbackError, fallbackContent) => {
                if (fallbackError) {
                    res.writeHead(404);
                    res.end('Not found');
                    return;
                }

                res.writeHead(200, { 'Content-Type': contentTypes['.html'] });
                res.end(fallbackContent);
            });
            return;
        }

        res.writeHead(200, {
            'Content-Type': contentTypes[path.extname(resolvedPath)] || 'application/octet-stream'
        });
        res.end(content);
    });
});

const wss = new WebSocket.Server({ server });
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

server.listen(port, '0.0.0.0', () => {
    console.log(`Sea Battle server listening on port ${port}`);
});
