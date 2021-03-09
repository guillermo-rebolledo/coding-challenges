/*
3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
Input: s = ""
Output: 0
 
Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function(s) {
  const seen = new Set(); // to help us see if a char is repeated
  let longest = 0; // to save the longest substring length
  let i = 0; //  left  side of window
  let j = 0; // right side of window
  
  // as long as booth sides of the window are less than the length of the string
  while (i < s.length && j < s.length) {
    // if it is a new char
    if (!seen.has(s[j])) {
      seen.add(s[j]); // add the char to the set so that we know if it repeats later
      longest = Math.max(longest, j - i + 1); // calculate the longest substr
      j += 1; // Increase the size of the window since the char is not repeating
    } else {
      seen.delete(s[i]); // if the char is repeated, we remove it from the set to reset
      i += 1; // increase the left side of the window (decrease size of window) (we dont count the current index since it is repeated)
    }
  }
  
  return longest;
};