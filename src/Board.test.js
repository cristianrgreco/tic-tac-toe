const { Grid } = require("./Grid");
const Board = require("./Board");

describe("Board", () => {
  it("should assign a value to a cell", () => {
    const board = new Board()
      .set({ row: 0, col: 0 }, "x")
      .set({ row: 1, col: 1 }, "o")
      .set({ row: 2, col: 2 }, "x");

    expect(board).toEqualGrid(`
      -------------
      | x |   |   |
      -------------
      |   | o |   |
      -------------
      |   |   | x |
      -------------
    `);
  });

  it("should return false if the game is not over", () => {
    const grid = new Grid()
      .set({ row: 0, col: 0 }, "x")
      .set({ row: 0, col: 1 }, "o")
      .set({ row: 0, col: 2 }, "x")
      .set({ row: 1, col: 0 }, "x")
      .set({ row: 1, col: 1 }, "o")
      .set({ row: 1, col: 2 }, "o")
      .set({ row: 2, col: 0 }, "o")
      .set({ row: 2, col: 1 }, "x")
      .set({ row: 2, col: 2 }, "x");

    const board = new Board(grid);

    expect(grid).toEqualGrid(`
      -------------
      | x | o | x |
      -------------
      | x | o | o |
      -------------
      | o | x | x |
      -------------
    `);
    expect(board.isOver()).toEqual(false);
  });

  it("should return false for an empty board", () => {
    const grid = new Grid();
    const board = new Board(grid);

    expect(grid).toEqualGrid(`
      -------------
      |   |   |   |
      -------------
      |   |   |   |
      -------------
      |   |   |   |
      -------------
    `);
    expect(board.isOver()).toEqual(false);
  });

  it("should return true if the game is over horizontally", () => {
    const grid = new Grid()
      .set({ row: 0, col: 0 }, "o")
      .set({ row: 0, col: 1 }, "o")
      .set({ row: 0, col: 2 }, "o")
      .set({ row: 1, col: 0 }, "x")
      .set({ row: 1, col: 1 }, "x")
      .set({ row: 1, col: 2 }, "o")
      .set({ row: 2, col: 0 }, "x")
      .set({ row: 2, col: 1 }, "o")
      .set({ row: 2, col: 2 }, "x");

    const board = new Board(grid);

    expect(grid).toEqualGrid(`
      -------------
      | o | o | o |
      -------------
      | x | x | o |
      -------------
      | x | o | x |
      -------------
    `);
    expect(board.isOver()).toEqual(true);
  });

  it("should return true if the game is over vertically", () => {
    const grid = new Grid()
      .set({ row: 0, col: 0 }, "o")
      .set({ row: 0, col: 1 }, "x")
      .set({ row: 0, col: 2 }, "x")
      .set({ row: 1, col: 0 }, "o")
      .set({ row: 1, col: 1 }, "x")
      .set({ row: 1, col: 2 }, "o")
      .set({ row: 2, col: 0 }, "o")
      .set({ row: 2, col: 1 }, "o")
      .set({ row: 2, col: 2 }, "x");

    const board = new Board(grid);

    expect(grid).toEqualGrid(`
      -------------
      | o | x | x |
      -------------
      | o | x | o |
      -------------
      | o | o | x |
      -------------
    `);
    expect(board.isOver()).toEqual(true);
  });

  it("should return true if the game is over diagonally", () => {
    const grid = new Grid()
      .set({ row: 0, col: 0 }, "x")
      .set({ row: 0, col: 1 }, "o")
      .set({ row: 0, col: 2 }, "x")
      .set({ row: 1, col: 0 }, "o")
      .set({ row: 1, col: 1 }, "x")
      .set({ row: 1, col: 2 }, "o")
      .set({ row: 2, col: 0 }, "o")
      .set({ row: 2, col: 1 }, "o")
      .set({ row: 2, col: 2 }, "x");

    const board = new Board(grid);

    expect(grid).toEqualGrid(`
      -------------
      | x | o | x |
      -------------
      | o | x | o |
      -------------
      | o | o | x |
      -------------
    `);
    expect(board.isOver()).toEqual(true);
  });

  it("should return the symbol of the winning player", () => {
    const grid = new Grid()
      .set({ row: 0, col: 0 }, "x")
      .set({ row: 0, col: 1 }, "o")
      .set({ row: 0, col: 2 }, "x")
      .set({ row: 1, col: 0 }, "o")
      .set({ row: 1, col: 1 }, "x")
      .set({ row: 1, col: 2 }, "o")
      .set({ row: 2, col: 0 }, "o")
      .set({ row: 2, col: 1 }, "o")
      .set({ row: 2, col: 2 }, "x");

    const board = new Board(grid);

    expect(grid).toEqualGrid(`
      -------------
      | x | o | x |
      -------------
      | o | x | o |
      -------------
      | o | o | x |
      -------------
    `);
    expect(board.getWinningPlayer()).toEqual("x");
  });
});
