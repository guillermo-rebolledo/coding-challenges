/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/

 Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s.charAt(i))) {
      map.set(s.charAt(i), 1);
    } else {
      const letter = s.charAt(i);
      const value = map.get(letter);
      map.set(letter, value + 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map.has(t.charAt(i))) {
      const letter = t.charAt(i);
      const value = map.get(letter);
      map.set(letter, value - 1);
    } else {
      return false;
    }
  }

  for (let occurrence of map.values()) {
    console.log(occurrence);
    if (occurrence !== 0) return false;
  }

  return true;
};
