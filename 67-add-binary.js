/**
 * 67. Add Binary
 * https://leetcode.com/problems/add-binary/
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"


Constraints:

Each string consists only of '0' or '1' characters.
1 <= a.length, b.length <= 10^4
Each string is either "0" or doesn't contain any leading zero.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = (a, b) => {
  // Truth Table
  // 1st + 2nd + carry = sum, new carry, decimal sum
  //   0 +  0  + 0 = 0, 0 (0)
  //   0 +  0  + 1 = 1, 0 (1)
  //   0 +  1  + 1 = 0, 1 (2)
  //   1 +  1  + 1 = 1, 1 (3)

  let carry = 0;
  let result = "";

  let len1 = a.length - 1;
  let len2 = b.length - 1;

  for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
    let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;
    if (sum > 1) {
      sum = sum % 2;
      carry = 1;
    } else {
      carry = 0;
    }
    result = `${sum}${result}`;
  }
  return result;
};
