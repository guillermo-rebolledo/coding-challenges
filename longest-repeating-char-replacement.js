/*
424. Longest Repeating Character Replacement
https://leetcode.com/problems/longest-repeating-character-replacement/

Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.
In one operation, you can choose any character of the string and change it to any other uppercase English character.
Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 104.

Example 1:
Input:
s = "ABAB", k = 2
Output:
4
Explanation:
Replace the two 'A's with two 'B's or vice versa.
 

Example 2:
Input:
s = "AABABBA", k = 1
Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// SLIDING WINDOWS Approach
// Time complexity: O(n) where n is the length of s
// Space complexity: O(26) = O(1) constant space, even though we have the extra map, we know that it can me max 26 chars 
var characterReplacement = function(s, k) {
  let maxLength = 0; // the max length of the substring that we can build replacing characters
  let maxCount = 0; // the max count of times a character appears in the string
  let windowStart = 0; // initialize the start index of the window
  const frequencyMap = {}; // to save the numer of times the characters appear in the string
  
  
  // the window end index will keep increasing (per sliding window approach)
  for (let windowEnd = 0; windowEnd < s.length; windowEnd ++) {
    // the right side of the window will be the one increasing the count in the frequency map
    // or adding new entries to the map as we increase the size of the window (every iteration)
    let rightChar = s[windowEnd];
    if (!frequencyMap[rightChar]) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;
    
    // we get the max count of the frequency of a character we have up to this point
    maxCount = Math.max(maxCount, frequencyMap[rightChar]);
    
    // the following line manages the sliding of the window:
    //  windowEnd - windowStart + 1 - maxCount will give us the remaining characters in the window that we need to replace
    // but we can only do that K times
    // if not, we slide the window and remove 1 from the frequency map in that key
    if (windowEnd - windowStart + 1 - maxCount > k) {
      let leftChar = s[windowStart];
      frequencyMap[leftChar] -= 1; // reduce the frequency of that char since that char is not in the window anymore
      windowStart += 1;
    }
    
    // calculate the max length of the substring depending on the current value and the size of the window
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  
  return maxLength;
};