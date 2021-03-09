/*
139. Word Break
https://leetcode.com/problems/word-break/

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.
 

Example 1:
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 
Constraints:
1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
*/

// Recursive solution (Brute Force)
// time: O(d * 2^n) or O(2^n)
// space: O(n)
var wordBreak = function(s, wordDict) {
  if (s.length === 0) {
    return true;
  }
  
  for (const word of wordDict) {
    let prefix = s.slice(0, word.length);
    let result = false;
    
    if (prefix === word) {
      const newStr = s.slice(word.length);
      result = wordBreak(newStr, wordDict);
    }
    
    if (result) {
      return true;
    }
  }
  
  return false;
};

// Top Down with Memoization Solution
 // time: O(n^3)  
 //   iteration for each prefix
 //   iretarion for every prefix of the prefix
 //   we are working with slice and string comparison
// space: O(n + m) -> where n is the length of s and m is the length of cache obj/map
const wordBreak = (s, wordDict) => {
  const memo = {};
  
  const helper = (s, wordDict, memo) => {
    if (s.length === 0) {
      return true;
    } else if (s in memo) {
      return memo[s];
    }
    
    for (const word of wordDict) {
      if (s.slice(0, word.length) === word && helper(s.slice(word.length), wordDict, memo)) {
        memo[s] = true;
        return true;
      }
    }
    memo[s] = false;
    return false;
  };
  
  return helper(s, wordDict, memo);
};