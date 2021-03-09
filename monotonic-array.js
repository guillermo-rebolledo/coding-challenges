/**
 * Monotonic Array
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

Sample Input
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
Sample Output true
 */

// O(n) time
// O(1) space
function isMonotonic(array) {
  // if the array has 2 items or less, we know that it is monotonic for sure
  if (array.length <= 2) return true;

  // if the direction is:
  //    negative: nonIncreasing
  //    positive: nonDecreasing
  //    zero: flat (we still need to determine the direction if flat)
  let direction = array[1] - array[0];

  // start from index 2, since we already used 0 & 1 to determine direction
  for (let i = 2; i < array.length; i++) {
    // If direction is flat, we still need to determine if it is nonIncreasing or nonDecreasing
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    // if the direction breaks then we can return false since the array is not
    // monotonic anymore. (is not nonInc or is not nonDec)
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }

  return true;
}

// Helper method to see if the direction breaks with comparing
// the current value against the previous value.
function breaksDirection(direction, prevInt, currentInt) {
  const diff = currentInt - prevInt;
  if (direction > 0) return diff < 0;
  return diff > 0;
}
