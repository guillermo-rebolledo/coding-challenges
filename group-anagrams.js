/*
49. Group Anagrams
https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// we first sort each word, use sorted word as key and then put original word in a map
// the value of the map will be a list containing all the words which have same word after sorting. 
var groupAnagrams = function(strs) {
  strs = strs.sort();
  const wordsMap = {}; // we create a map wiith the sorted words as keys and an array with the possible anagrams as value

  for (let i = 0; i < strs.length; i++) {
      let str = strs[i];
      let sorted = str.split('').sort().join('');
      
      // if the map does not have that word, add that key and an array with the current string as value { sortedWord: [word]}
      if (wordsMap[sorted] === undefined) {
          wordsMap[sorted] = [str];
      } else {
          // if the map already has that key,  push to the array from the value
          wordsMap[sorted].push(str); 
      }
  }

  const output = [];
  for (const arr in wordsMap) {
      output.push(wordsMap[arr]);
  }
  
return output;
  // return Object.values(wordsMap);
};