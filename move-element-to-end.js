/**
Move Element To End

You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.
The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

Sample Input
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
Sample Output [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently
 */

// O(n) time - linear time because we only traverse the array once
// O(1) space - constant space because we do the swap in-place

function moveElementToEnd(array, toMove) {
  // we declare 2 pointers, 1 at the start and 1 at the end of the array
  let i = 0;
  let j = array.length - 1;

  // while the two poinets dont overlap, if they overlap that means we traversed the entire array
  while (i < j) {
    // as long as they pointers dont overlap and the value of the array in 'j' is equal to the number we have to move
    while (i < j && array[j] === toMove) {
      // decrease the value of the right pointer
      j--;
    }
    // if we find the value we have to move at array[i] (left pointer), we swap the value and send it to the
    // position where 'j' currently is
    if (array[i] === toMove) {
      swap(i, j, array);
    }
    // increase the 'i' pointer on each iteration
    i++;
  }

  // return the array with the swapped values
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
