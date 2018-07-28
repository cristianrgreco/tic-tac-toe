const { Grid } = require("./Grid");

describe("Grid", () => {
  it("should render", () => {
    expect(new Grid()).toEqualGrid(`
      -------------
      |   |   |   |
      -------------
      |   |   |   |
      -------------
      |   |   |   |
      -------------
    `);
  });

  it("should assign a value to a cell", () => {
    const grid = new Grid()
      .set({ row: 0, col: 0 }, "x")
      .set({ row: 1, col: 1 }, "o")
      .set({ row: 2, col: 2 }, "x");

    expect(grid).toEqualGrid(`
      -------------
      | x |   |   |
      -------------
      |   | o |   |
      -------------
      |   |   | x |
      -------------
    `);
  });

  it("should return all horizontal rows", () => {
    const grid = new Grid()
      .set({ row: 0, col: 0 }, "x")
      .set({ row: 0, col: 1 }, "x")
      .set({ row: 0, col: 2 }, "x")
      .set({ row: 1, col: 0 }, "o")
      .set({ row: 1, col: 1 }, "o")
      .set({ row: 1, col: 2 }, "o")
      .set({ row: 2, col: 0 }, "x")
      .set({ row: 2, col: 1 }, "x")
      .set({ row: 2, col: 2 }, "x");

    const horizontalRows = grid.getHorizontalRows();
    expect(grid).toEqualGrid(`
      -------------
      | x | x | x |
      -------------
      | o | o | o |
      -------------
      | x | x | x |
      -------------
    `);
    expect(horizontalRows).toEqual([
      ["x", "x", "x"],
      ["o", "o", "o"],
      ["x", "x", "x"]
    ]);
  });

  it("should return all vertical rows", () => {
    const grid = new Grid()
      .set({ row: 0, col: 0 }, "x")
      .set({ row: 1, col: 0 }, "x")
      .set({ row: 2, col: 0 }, "x")
      .set({ row: 0, col: 1 }, "o")
      .set({ row: 1, col: 1 }, "o")
      .set({ row: 2, col: 1 }, "o")
      .set({ row: 0, col: 2 }, "x")
      .set({ row: 1, col: 2 }, "x")
      .set({ row: 2, col: 2 }, "x");

    const verticalRows = grid.getVerticalRows();
    expect(grid).toEqualGrid(`
      -------------
      | x | o | x |
      -------------
      | x | o | x |
      -------------
      | x | o | x |
      -------------
    `);
    expect(verticalRows).toEqual([
      ["x", "x", "x"],
      ["o", "o", "o"],
      ["x", "x", "x"]
    ]);
  });

  it("should return all diagonal rows", () => {
    const grid = new Grid()
      .set({ row: 0, col: 0 }, "x")
      .set({ row: 0, col: 1 }, "o")
      .set({ row: 0, col: 2 }, "o")
      .set({ row: 1, col: 0 }, "x")
      .set({ row: 1, col: 1 }, "o")
      .set({ row: 1, col: 2 }, "x")
      .set({ row: 2, col: 0 }, "o")
      .set({ row: 2, col: 1 }, "o")
      .set({ row: 2, col: 2 }, "x");

    const diagonalRows = grid.getDiagonalRows();
    expect(grid).toEqualGrid(`
      -------------
      | x | o | o |
      -------------
      | x | o | x |
      -------------
      | o | o | x |
      -------------
    `);
    expect(diagonalRows).toEqual([["x", "o", "x"], ["o", "o", "o"]]);
  });
});
