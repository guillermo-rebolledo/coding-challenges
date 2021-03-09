
// HASH MAP Approach
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // An anagram is a re-arragement of characters in a string, so:
  // If the lengths of the strings are not the same then it cant be an anagram
  if (s.length !== t.length) {
    return false;
  }
  
  // create a Map that saves the characters in the strings and the number of times they occur
  const charMap = {};
  
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (!charMap[currentChar]) {
      charMap[currentChar] = 0; // if we find a character for the first time, add it too the map
    }
    charMap[currentChar] += 1; // increase the counter, if first time then it goes from 0 to 1
  }
  
  // we iterate now through t to see if it is a valida anagram
  for (let i = 0; i < t.length; i++) {
    const currentChar = t[i];
     // if a char in t is not in s or it has more ocurrences of a char
     // having !charMap[currentChar] also accouts for the times where the num of occurrences iis 0
     //  which means theres is more chars 'X' in t than in s
    if (!charMap[currentChar]) {
      return false
    }
    // decrease the count of the occurrence of that char in the map
    charMap[currentChar] -= 1;
  }
  
  return true;
};