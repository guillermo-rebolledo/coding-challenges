/**
 * 66. Plus One
 * https://leetcode.com/problems/plus-one/

Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.



Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Example 3:

Input: digits = [0]
Output: [1]


Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let wasAdded = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    // If we still need to add +1
    if (!wasAdded) {
      // check if the current number is a nine (9)
      if (digits[i] === 9) {
        if (i === 0) {
          // If we still need to add and the first digit is a 9, we replace with a 0 and add a 1 on the left
          digits[i] = 0;
          digits.unshift(1);
        } else {
          // If it is a 9 we replace with a 0 and dont set wasAdded to false so that we hace a +1 still for the carry
          digits[i] = 0;
          wasAdded = false;
        }
      } else {
        digits[i] = digits[i] + 1;
        wasAdded = true;
      }
    }
  }

  return digits;
};
