/**
Balanced Brackets

Write a function that takes in a string made up of brackets ((, [, {, ), ], and }) and other optional characters. The function should return a boolean representing whether the string is balanced with regards to brackets.
A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that type and if no bracket is unmatched. Note that an opening bracket can't match a corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in [(]).

Sample Input
string = "([])(){}(())()()"

Sample Output
true // it's balanced
 */

function balancedBrackets(string) {
  //  We declare a stack, this will help us see whats on top of it and if it matches the current char that we are evaluating.
  //  LIFO (Last in first out) helps us dictate the order in which the brackes in the string should appear in order to be balanced.
  const stack = [];
  //  We have two helper strings that let us know which characters are closing and opening characters.
  const opening = "([{";
  const closing = ")]}";
  //  We have a map (can be an object) in which we match the closing brackets with their corresponding opening ones.
  const bracketMap = initMatchingBracketMap(); // This could be a simple Object {key: val}, I just prefer using hash maps.

  //  We iterate over the string char by char
  for (const char of string) {
    // if we find a character that is an opening bracet, we add it to the stack
    if (opening.includes(char)) {
      stack.push(char);
    } else if (closing.includes(char)) {
      //  if we find a character that is a closing bracket, we check if the length of the stack is 0 (empty), that means this closing bracket is extra
      //  so we conclude that the brackets are not balanced.
      if (stack.length === 0) {
        return false;
      }

      // If the character is a closing bracket and it matches with what is on top of the stack, then we remove the element at the top of the stack and continue
      //  if it does not match, then we can conclude that the brackets are not balanced.
      if (stack[stack.length - 1] === bracketMap.get(char)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  // at the end, if the stack is empty, that means that there was the same amount of opening brackes as closing ones and they appeared in the correct order.
  return stack.length === 0;
}

function initMatchingBracketMap() {
  const bracketMap = new Map();

  bracketMap.set(")", "(");
  bracketMap.set("]", "[");
  bracketMap.set("}", "{");

  return bracketMap;
}
