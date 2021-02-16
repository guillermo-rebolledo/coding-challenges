/**
Spiral Traverse

Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m)
and returns a one-dimensional array of all the array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes to the right,
and proceeds in a spiral pattern all the way until every element has been visited.

Sample Input
array = [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7],
]

Sample Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 */

// O(N) time where N is the TOTAL number of elements in the Array
// O(N) space

function spiralTraverse(array) {
  const result = [];
  // We save euxiliary values in order to keep track of the 'perimeter' that we
  // need to traverse.
  let startCol = 0;
  let endCol = array[0].length - 1;
  let startRow = 0;
  let endRow = array.length - 1;

  // as long as the starting row and starting column are less or equal than the end column and row
  // we keep iterating. When the endRow > startRow or endCol > startCol that means we are done
  // with the spiral pattern
  while (startRow <= endRow && startCol <= endCol) {
    // Traverse the top border
    for (let colIdx = startCol; colIdx <= endCol; colIdx++) {
      result.push(array[startRow][colIdx]);
    }

    // Traverse the right border
    for (let rowIdx = startRow + 1; rowIdx <= endRow; rowIdx++) {
      result.push(array[rowIdx][endCol]);
    }

    // Traverse the bottom border
    for (let colIdx = endCol - 1; colIdx >= startCol; colIdx--) {
      // If there is a single row in the middle of the matrix
      if (startRow === endRow) break;
      result.push(array[endRow][colIdx]);
    }

    // Traverse the left border
    for (let rowIdx = endRow - 1; rowIdx > startRow; rowIdx--) {
      // If there is a single row in the middle of the matrix
      if (startCol === endCol) break;
      result.push(array[rowIdx][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return result;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
