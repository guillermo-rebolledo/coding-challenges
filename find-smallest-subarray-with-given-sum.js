/*
Time Complexity: O(N)
  The outer for loop runs for all elements and the inner while loop processes each element only once,
  therefore the time complexity of the algorithm will be O(N+N) which is asymptotically equivalent to O(N).
Space Complexity: O(1)

Approach: Sliding Window

Notes: Since we dont have a fixed window size. We are gonna set the size of the window when the sum is greater or equal than 's'.
*/

function smallest_subarray_with_given_sum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(7, [
    2,
    1,
    5,
    2,
    3,
    2,
  ])}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(7, [
    2,
    1,
    5,
    2,
    8,
  ])}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(8, [
    3,
    4,
    1,
    1,
    6,
  ])}`
);
