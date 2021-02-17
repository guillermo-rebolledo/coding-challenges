/*
  200. Number of Islands

  Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.
  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

  Example 1:
  Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  Output: 1

  Example 2:
  Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  Output: 3

  Constraints:
  m == grid.length
  n == grid[i].length
  1 <= m, n <= 300
  grid[i][j] is '0' or '1'.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  // Initialize the counter to 0
  let islandCounter = 0;

  // Iterate over the grid/matrix and IF we find a '1' (land) increase counter and explore the neighbors
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") {
        islandCounter++;
        explore(row, col, grid);
      }
    }
  }

  // return the count we gathered
  return islandCounter;
};

const explore = (row, col, grid) => {
  // We check if:
  //    the index we want to explore is out of bounds
  //    the index for both column and row is less than 0
  //    the element on [row][col] is not a '0' (water)
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[row].length ||
    grid[row][col] === "0"
  ) {
    return;
  }

  // We mark the element with a '0', which means we already visited it
  grid[row][col] = "0";

  // Now we visit the neighbor elements to see how far we have to go in order to know if we should hold the count or keep counting

  // up
  explore(row + 1, col, grid);

  //down
  explore(row - 1, col, grid);

  //left
  explore(row, col + 1, grid);

  //right
  explore(row, col - 1, grid);
};
