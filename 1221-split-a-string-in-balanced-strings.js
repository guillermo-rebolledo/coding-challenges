/**
 * 1221. Split a String in Balanced Strings
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/

Balanced strings are those who have equal quantity of 'L' and 'R' characters.
Given a balanced string s split it in the maximum amount of balanced strings.
Return the maximum amount of splitted balanced strings.

Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

Example 3:
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

Example 4:
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

Constraints:
1 <= s.length <= 1000
s[i] = 'L' or 'R'
 */

/**
 * @param {string} s
 * @return {number}
 */

// Time O(n), Space O(n)
var balancedStringSplit = function (s) {
  if (s.length < 2) return 0;

  let currentItem = s[0];
  const x = [currentItem];
  let res = 0;

  for (let idx = 1; idx < s.length; idx++) {
    if (x.length === 0) {
      currentItem = s[idx];
    }

    if (s[idx] !== currentItem) {
      x.shift();
      if (x.length === 0) {
        res++;
      }
    } else {
      x.push(s[idx]);
    }
  }

  return res;
};

// Optimization to Time O(n), Space O(1)
var balancedStringSplit = function (s) {
  let matches = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      balance -= 1;
    } else if (s[i] === "L") {
      balance += 1;
    }

    if (balance === 0) {
      matches += 1;
    }
  }

  return matches;
};
