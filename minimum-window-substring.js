/*
76. Minimum Window Substring
https://leetcode.com/problems/minimum-window-substring/

Given two strings s and t, return the minimum window in s which will contain all the characters in t. 
If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

Example 2:
Input: s = "a", t = "a"
Output: "a"
 
Constraints:
1 <= s.length, t.length <= 105
s and t consist of English letters.
 */

 
// SLIDING WINDOW Approach
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s = '', t = '') {
  let windowStart = 0; // Left side of the window
  let substrStart = 0; // this will help us get the substring based on the window start and the min length of the substr 
  let matched = 0; // counter for num. of times 
  let minLength = s.length + 1; // keep track of the min length of the substring (will depend on the window size)
  const freqMap = {}; // will save the num. of times the chars in t repeat
  
  // loop to fill out the frequency map (chars from t)
  for (const char of t) {
    if (!freqMap[char]) {
      freqMap[char] = 0;
    }
    freqMap[char] += 1;
  }
  
  // for loop that extends the size of the window each iteration
  for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    if (rightChar in freqMap) {
      freqMap[rightChar] -= 1; // if we find a char from the map (t string) we decrease the count of that char in the map
      if (freqMap[rightChar] >= 0) { // as long as that count it is greater or equal to 0 after decreasing the count, we increase the matched counter
        matched += 1; // found that char, which means we matched with a char from s in t
      }
    }
    
    // when matched is equal to t's length, that means:
    // we matched all necessary characters and have a window with a substring that satisfies the constraint of the problem
    // we just need to shrink the window now, to find a shorter window
    while (matched === t.length) {
      // if the size of the window is shorter than the minLength so far:
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1; // update minLength with the current size of the window
        substrStart = windowStart; // also, the start of the substring will be the current start of the window
      }
      
      let leftChar = s[windowStart];
      windowStart += 1; // shrink the size of the window
      if (leftChar in freqMap) {
        // we could have redundant matching characters, therefore we'll decrement the
        // matched count only when a useful occurrence of a matched character is going out of the window
        if (freqMap[leftChar] === 0) {
          matched -= 1;
        }
        freqMap[leftChar] += 1;
      }
    }
  }
  
  if (minLength > s.length) {
    return '';
  }
  
  return s.substring(substrStart, substrStart + minLength);
}