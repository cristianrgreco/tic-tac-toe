const readline = require("readline");
const Board = require("./Board");

const players = ["x", "o"];

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function startGame(board = new Board(), moveCount = 0) {
  if (board.isOver()) {
    const winningPlayer = board.getWinningPlayer();
    console.log(`\nPlayer '${winningPlayer}' is victorious!\n`);
    prompt.close();
    return;
  }

  const renderedBoard = board.toString();
  console.log(`\n${renderedBoard}\n`);

  const player = moveCount % players.length === 0 ? players[0] : players[1];

  const position = await new Promise(resolve =>
    prompt.question(`Player '${player}'; enter your choice: `, ([row, col]) =>
      resolve({ row, col })
    )
  );

  const nextBoard = board.set(position, player);

  return startGame(nextBoard, moveCount + 1);
}

startGame();
