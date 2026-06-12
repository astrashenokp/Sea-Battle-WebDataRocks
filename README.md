# Sea Battle WebDataRocks

This is a browser game based on the classic Sea Battle game for two players.
Players connect to the same room, generate their fleets, click Ready, and take turns shooting at the opponent's board.

The game board is displayed with WebDataRocks.
The moves between two players are sent through a WebSocket server.

## Features

- random fleet generation;
- two boards: your board and the opponent's board;
- Generate Fleet, Ready, and Play Again buttons;
- real-time moves between two players;
- hit, miss, and game over states.

## Technologies

- JavaScript;
- HTML and CSS;
- Webpack;
- Node.js;
- WebSocket;
- WebDataRocks.

## How to Run

Install dependencies:

```bash
npm install
```

Build the client files:

```bash
npm run build
```

Start the server:

```bash
npm start
```

Open the game in the browser:

```text
http://localhost:8080
```

To play locally with two players, open this address in two browser tabs or in two different browsers.

## How to Play

1. Open the game in two tabs.
2. Click Generate Fleet if you want to change your ship positions.
3. Click Ready in both tabs.
4. When the game starts, shoot at the opponent's board.
5. The player who destroys all opponent ships first wins.

## Project Structure

```text
src/
  index.js       main game logic
  gameBoard.js   board creation and rendering
  style.css      game styles

server/
  server.js      game server and WebSocket logic

dist/
  index.html     ready HTML page
  main.js        bundled JavaScript
```
