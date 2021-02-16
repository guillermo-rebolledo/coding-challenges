/*
Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:
Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:
Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/
const max_sub_array_of_size_k = function (k, arr) {
  let windowStart = 0;
  let windowSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return maxSum;
};

console.log(
  `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [
    2,
    1,
    5,
    1,
    3,
    2,
  ])}`
);
console.log(
  `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [
    2,
    3,
    4,
    1,
    5,
  ])}`
);
