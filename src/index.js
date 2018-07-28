const readline = require("readline");
const Board = require("./Board");
const players = require("./players");

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function startGameLoop(board = new Board(), moveCount = 0) {
  if (board.isOver()) {
    console.log(getWinnerText(board));
    prompt.close();
    return;
  }

  console.log(`\n${board.toString()}\n`);

  const player = getPlayer(players, moveCount);
  const position = await getNextPosition(player);

  const nextBoard = board.set(position, player);
  return startGameLoop(nextBoard, moveCount + 1);
}

function getWinnerText(board) {
  const winningPlayer = board.getWinningPlayer();
  return `\nPlayer '${winningPlayer}' is victorious!\n`;
}

function getPlayer(players, moveCount) {
  return players[moveCount % players.length];
}

function getNextPosition(player) {
  return new Promise(resolve =>
    prompt.question(`Player '${player}'; enter your choice: `, ([row, col]) =>
      resolve({ row, col })
    )
  );
}

startGameLoop();
