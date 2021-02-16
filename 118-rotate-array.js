/**
 * 189. Rotate Array
 * https://leetcode.com/problems/rotate-array/

Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?


Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Constraints:

1 <= nums.length <= 2 * 10^4
It's guaranteed that nums[i] fits in a 32 bit-signed integer.
k >= 0
 */

// BRUTE FORCE
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  while (k > 0) {
    const extracted = nums.pop();
    nums.unshift(extracted);

    k--;
  }

  return nums;
};

// USING A STACK
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
const rotate = (nums, k) => {
  const stack = [];
  k %= nums.length;
  while (k) {
    stack.push(nums.pop());
    k--;
  }
  nums.unshift(...stack.reverse());
};

// MORE EFFICIENT
// Time complexity: O(N)
// Space complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = (nums, k) => {
  let [start, count] = [0, 0];
  while (count < nums.length) {
    let [current, prev] = [start, nums[start]];
    do {
      current = (current + k) % nums.length;
      [nums[current], prev] = [prev, nums[current]];
      count++;
    } while (current !== start);
    start++;
  }
};
