/**
Problem Statement
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Example 1:
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Example 2:
Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
 */

// Time Complexity: O(N)
// Space Complexity: O(1) - Since this is done in place it is constant space.
// Approach: Two Pointers

const remove_duplicates = function (arr) {
  let nextNonDup = 1;
  let i = 0;

  while (i < arr.length) {
    if (arr[nextNonDup - 1] !== arr[i]) {
      arr[nextNonDup] = arr[i];
      nextNonDup += 1;
    }
    i += 1;
  }

  return nextNonDup;
};
