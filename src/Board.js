const { Grid, EMPTY } = require("./Grid");

class Board {
  constructor(grid = new Grid()) {
    this._grid = grid;
  }

  isOver() {
    return this._getWinningRow() !== undefined;
  }

  getWinningPlayer() {
    return this._getWinningRow()[0];
  }

  set(position, value) {
    this._grid = this._grid.set(position, value);
    return this;
  }

  toString() {
    return this._grid.toString();
  }

  _getWinningRow() {
    const rows = [
      ...this._grid.getHorizontalRows(),
      ...this._grid.getVerticalRows(),
      ...this._grid.getDiagonalRows()
    ];

    return rows.find(Board._isWinningRow);
  }

  static _isWinningRow(row) {
    const set = new Set(row);
    return set.size === 1 && !set.has(EMPTY);
  }
}

module.exports = Board;
