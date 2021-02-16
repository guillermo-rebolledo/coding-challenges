// Time Complexity: O(N) N = number of characters in the input string
// Space Complexity: O(K) K = number of distinct characters in the input string
// Approach: Sliding Window

// The key is to know how to set 'windowStart' and 'maxLength'
const non_repeat_substring = function (str) {
  let windowStart = 0;
  let maxLength = 0;
  const charIndexMap = new Map(); // Map<string, number> -> <character, indexFound@>;

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (charIndexMap.has(rightChar)) {
      // in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charIndexMap.get(rightChar) + 1);
    }
    // insert the 'rightChar' into the map
    charIndexMap.set(str[windowEnd], windowEnd);
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(
  `Length of the longest substring: ${non_repeat_substring("aabccbb")}`
);
console.log(
  `Length of the longest substring: ${non_repeat_substring("abbbb")}`
);
console.log(
  `Length of the longest substring: ${non_repeat_substring("abccde")}`
);
