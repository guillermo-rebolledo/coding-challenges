/*
136. Single Number
https://leetcode.com/problems/single-number/

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Brute Force Approach with Extra Space
// Time O(n)
// Space O(n)
var singleNumber = function(nums) {
  const numsSet = new Set();
  
  for(const num of nums) {
    if (numsSet.has(num)) {
      numsSet.delete(num);
    } else {
      numsSet.add(num);
    }
  }
  
  return [...numsSet][0];
};

// Bit Manipulation
// Optimal (constant space) solution w/For
var singleNumber = function(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  
  return result;
};

// Bit Manipulation
// Optimal (constant space) solution w/Reduce
var singleNumber = function(nums) {
  // perform XOR through the numbers.
  // the repeated numbers will cancel out and result 
  // in the single number in the array.
  return nums.reduce((result, num) => result ^ num, 0);
};