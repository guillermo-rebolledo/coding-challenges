/**
 * 1512. Number of Good Pairs
 * https://leetcode.com/problems/number-of-good-pairs/
 *

 Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
 */

// Brute Force - O(n^2)
var numIdenticalPairs = function (nums) {
  let goodCount = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] === nums[j]) {
          goodCount++;
        }
      }
    }
  }

  return goodCount / 2;
};

// Another Approach using Map - O(n)
var numIdenticalPairs = function (nums) {
  let map = new Map();
  let count = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (map.has(nums[i])) {
      count += map.get(nums[i]);
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  return count;
};
