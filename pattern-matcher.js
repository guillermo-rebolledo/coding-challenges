/**
Pattern Matcher

You're given two non-empty strings. The first one is a pattern consisting of only "x"s and / or "y"s; the other one is a normal string of alphanumeric characters. Write a function that checks whether the normal string matches the pattern.
A string S0 is said to match a pattern if replacing all "x"s in the pattern with some non-empty substring S1 of S0 and replacing all "y"s in the pattern with some non-empty substring S2 of S0 yields the same string S0.
If the input string doesn't match the input pattern, the function should return an empty array; otherwise, it should return an array holding the strings S1 and S2 that represent "x" and "y" in the normal string, in that order. If the pattern doesn't contain any "x"s or "y"s, the respective letter should be represented by an empty string in the final array that you return.
You can assume that there will never be more than one pair of strings S1 and S2 that appropriately represent "x" and "y" in the normal string.

Sample Input
pattern = "xxyxxy"
string = "gogopowerrangergogopowerranger"

Sample Output
["go", "powerranger"]
 */

// O(n^2 + m) time - where n is the length of the string and m is the length of the pattern
// O(n +m) space
function patternMatcher(pattern, string) {
  // cover the edge case where the pattern is longer than the main string
  if (pattern.length > string.length) return [];
  //	Switch Y's with X's if pattern starts with Y.
  const newPattern = getNewPattern(pattern);
  // In order to keep track if we did a switch of X's and Y's.
  const didSwitch = pattern[0] !== newPattern[0];
  const counts = { x: 0, y: 0 };
  const firstYPosition = getCountsAndFirstYPos(newPattern, counts);

  // If we have Y's in the pattern
  if (counts["y"] !== 0) {
    for (let lengthOfX = 1; lengthOfX < string.length; lengthOfX++) {
      //	We get the length of Y based on the string length, the length of X and the counts of X's and Y's
      let lengthOfY = (string.length - lengthOfX * counts["x"]) / counts["y"];

      // If our Y has a negative length or is a decimal number it is impossible to match pattern
      if (lengthOfY <= 0 || lengthOfY % 1 !== 0) {
        continue;
      }

      // We get the index of Y in the main string
      const yIndex = firstYPosition * lengthOfX;
      //	We get the substrings from the main string based on the length of X and Ys and the index
      //	that we just calculated.
      const x = string.slice(0, lengthOfX);
      const y = string.slice(yIndex, yIndex + lengthOfY);
      //	Map the new pattern for everychar in new pattern:
      //	[x,x,y,x,x,y] -> [go, go, powerranger, go, go, powerranger] for example.
      const potentialMatch = newPattern.map((char) => (char === "x" ? x : y));

      if (string === potentialMatch.join("")) {
        //	If we did the switch in the pattern (x->y and y->x) in the begining, we return the reversed array.
        return didSwitch ? [y, x] : [x, y];
      }
    }
  } else {
    //	We have to cover the edge case where the pattern only has X's
    //	We can be sure that the pattern might only have X's only since we did the switch with 'getNewPattern'
    const lengthOfX = string.length / counts["x"];
    if (lengthOfX % 1 === 0) {
      const x = string.slice(0, lengthOfX);
      const potentialMatch = newPattern.map((char) => (char === "x" ? x : ""));

      if (string === potentialMatch.join("")) {
        return didSwitch ? ["", x] : [x, ""];
      }
    }
  }

  return [];
}

//	The goal of this function is to check if we need to swap Y's and X's
//	in order to simplify the algorithm (if we are sure that it's always starting with X).
//	We return the pattern in an array format.
function getNewPattern(pattern) {
  const patternLetters = pattern.split("");

  if (pattern[0] === "x") {
    return patternLetters;
  } else {
    //	return an array with the Y's swapped with X's and X's swapped with Y's
    //	only if the first letter of the pattern is an X, in order to simplify the algo
    //	knowing that all patterns/strings start with X.
    return patternLetters.map((char) => (char === "y" ? "x" : "y"));
  }
}

//	We use this function to get the first position of Y in the pattern.
//	Also, it updates the counts object/map/dictionary with the number of occurrences of X and Y in the pattern
function getCountsAndFirstYPos(pattern, counts) {
  let firstYPos = null;
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    counts[char] += 1;
    if (char === "y" && firstYPos === null) {
      firstYPos = i;
    }
  }

  return firstYPos;
}
