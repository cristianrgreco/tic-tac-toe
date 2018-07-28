expect.extend({
  toEqualGrid(grid, expectedGridLayout) {
    const gridLayout = grid.toString();
    const pass = gridLayout === formatGrid(expectedGridLayout);

    if (pass) {
      return {
        message: () => `expected ${gridLayout} not to equal ${expectedGridLayout}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${gridLayout} to equal ${expectedGridLayout}`,
        pass: false,
      };
    }
  }
});

function formatGrid(grid) {
  return grid
    .trim()
    .split("\n")
    .map(line => line.trim())
    .join("\n");
}
