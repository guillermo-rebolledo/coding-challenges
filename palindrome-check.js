/**
Palindrome Check

Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

Sample Input
string = "abcdcba"

Sample Output
true // it's written the same forward and backward
 */

/*
  Simple and most efficient approach: Linear time O(n) and Constant space O(1) since we do the check in place, we dont create any extra data structure.

  - We create two pointers that traverse the string one from the start and one from the end.
  - as long as the first pointer is less than the second one, we keep looping looking for a possible mismatch in the letters of the string.
  - if we find a mismatch then we can return false since the string is not a palindrome
  - if we get to the end of the loop and we dont find any different letters, we can assume the string is a palindrome.


  THIS ALGORITHM ONLY WORKS IF WE DONT HAVE ANY SPECIAL CHARACTERS IN THE STRING aka only lowercase letters a-z.

  If we had upper and lower case letters as well as special characters, then we would have to trim and remove them then transform all letters to the same case.
  Then proceed with the same algorithm.
*/

// O(n) - time
// O(1) - space
function isPalindrome(string) {
  let firstPointer = 0;
  let secondPointer = string.length - 1;

  while (firstPointer < secondPointer) {
    if (string[firstPointer] !== string[secondPointer]) {
      return false;
    }
    firstPointer++;
    secondPointer--;
  }

  return true;
}
