// Time Complexity: O(N) N = input array
// Space Complexity: O(N) (since we create a new array with the same length as the input array)
// Approach: Two Pointers

const make_squares = function (arr) {
  const squares = Array(arr.length).fill(0);
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let highestSqrIndex = arr.length - 1;

  while (leftPointer <= rightPointer) {
    let leftSqr = arr[leftPointer] * arr[leftPointer];
    let rightSqr = arr[rightPointer] * arr[rightPointer];

    if (leftSqr > rightSqr) {
      squares[highestSqrIndex] = leftSqr;
      leftPointer += 1;
    } else {
      squares[highestSqrIndex] = rightSqr;
      rightPointer -= 1;
    }

    highestSqrIndex -= 1;
  }

  return squares;
};
