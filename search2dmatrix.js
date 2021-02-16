const searchMatrix = (matrix, target) => {
  if (!matrix.length || !matrix[0].length) return false;

  const rowLength = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = rowLength;

  while (top <= bottom) {
    const midRow = Math.floor((top + bottom) / 2);

    if (matrix[midRow][0] <= target && matrix[midRow][rowLength] >= target) {
      while (left <= right) {
        const midCol = Math.floor((left + right) / 2);
        const curVal = matrix[midRow][midCol];

        if (curVal === target) return true;
        if (curVal < target) left = midCol + 1;
        else right = midCol - 1;
      }
      return false;
    }
    if (matrix[midRow][0] > target) {
      bottom = midRow - 1;
    } else {
      top = midRow + 1;
    }
  }

  return false;
}

console.log([[1, 3, 5, 7],
[10, 11, 16, 20],
[23, 30, 34, 50]
]);

console.log(searchMatrix([
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 3));

console.log([[1, 3, 5, 7],
[10, 11, 16, 20],
[23, 30, 34, 50]
]);

console.log(searchMatrix([
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 13));

