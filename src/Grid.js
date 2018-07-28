const SIZE = 3;
const EMPTY = " ";

class Grid {
  constructor() {
    this._grid = new Array(SIZE)
      .fill(EMPTY)
      .map(() => new Array(SIZE).fill(EMPTY));
  }

  set(position, value) {
    this._grid[position.row][position.col] = value;
    return this;
  }

  getHorizontalRows() {
    return this._grid;
  }

  getVerticalRows() {
    return this._grid.map((row, i) => row.map((cell, j) => this._grid[j][i]));
  }

  getDiagonalRows() {
    return [
      this._grid.map((row, i) => this._grid[i][i]),
      this._grid.map((row, i) => this._grid[i][row.length - 1 - i])
    ];
  }

  toString() {
    const horizontalBorder = "-".repeat(SIZE * 4 + 1);
    const borderRow = row => `| ${row.join(" | ")} |`;
    const cells = this._grid.map(borderRow).join(`\n${horizontalBorder}\n`);
    return `${horizontalBorder}\n${cells}\n${horizontalBorder}`;
  }
}

module.exports = { Grid, EMPTY };
