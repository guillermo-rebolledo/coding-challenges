/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/

 Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false


Constraints:

s consists only of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const cleanStr = s.replace(/[\W_]+/g, "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");

  for (let i = 0; i < cleanStr.length; i++) {
    if (cleanStr[i] !== reversedStr[i]) return false;
  }

  return true;
};

// Approach without built-in methods
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (input) {
  var start = 0;
  var end = input.length - 1;
  while (start < end) {
    var s = input.charCodeAt(start);
    var e = input.charCodeAt(end);

    if (!isLetter(s)) {
      start++;
      continue;
    }
    if (!isLetter(e)) {
      end--;
      continue;
    }

    if (toLowerCase(s) !== toLowerCase(e)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

var isLetter = function (code) {
  if (
    (code >= 48 && code <= 57) || // numbers
    (code >= 65 && code <= 90) || // uppercase
    (code >= 97 && code <= 122)
  ) {
    // lowercase
    return true;
  } else {
    return false;
  }
};

var toLowerCase = function (code) {
  if (code >= 65 && code <= 90) {
    return code + 32;
  } else {
    return code;
  }
};
