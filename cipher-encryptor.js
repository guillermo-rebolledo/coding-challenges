/**
Caesar Cipher Encryptor

Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.
Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.

Sample Input
string = "xyz"
key = 2

Sample Output
"zab"
*/

/*
  They key to solve this is to keep in mind that the string we get can wrap around the alphabet.
  To do this we can use the modulo operation (%), that basically gives us the letters of the alphabet starting from 'a' again.
*/

function caesarCipherEncryptor(string, key) {
  const result = [];
  const newKey = key % 26;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (const letter of string) {
    result.push(getNewLetter(letter, newKey, alphabet));
  }

  return result.join("");
}

function getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return alphabet[newLetterCode % 26];
}
