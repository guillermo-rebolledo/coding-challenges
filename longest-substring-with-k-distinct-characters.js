/**
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:
Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:
Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 */

const longest_substring_with_k_distinct = function (str, k) {
  let windowStart = 0;
  let maxLength = 0;
  const frequencyMap = new Map();

  // We loop the whole array and fill out the HashMap with the characters we find and update it with the frequencies.
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if (frequencyMap.has(str[windowEnd])) {
      frequencyMap.set(str[windowEnd], frequencyMap.get(str[windowEnd]) + 1);
    } else {
      frequencyMap.set(str[windowEnd], 1);
    }

    // once the freqeuencies reach K (number of distinct characters in substring),
    // we move the window and update those frequencies in the map, if a char has 0 frequency we remove it from the map
    // (this matters because  we compare the size of the map)
    while (frequencyMap.size > k) {
      const leftMostChar = str[windowStart];
      if (frequencyMap.has(leftMostChar)) {
        frequencyMap.set(leftMostChar, frequencyMap.get(leftMostChar) - 1);

        if (frequencyMap.get(leftMostChar) === 0) {
          frequencyMap.delete(leftMostChar);
        }
      }

      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
