/**
Find Closest Value In BST

Write a function that takes in a Binary Search Tree (BST) and
a target integer value and returns the closest value to that target value contained in the BST.
You can assume that there will only be one closest value.
Each BST node has an integer value, a left child node, and a right child node.
A node is said to be a valid BST node if and only if it satisfies the BST property:
  its value is strictly greater than the values of every node to its left;
  its value is less than or equal to the values of every node to its right;
  and its children nodes are either valid BST nodes themselves or None / null.

Sample Input
tree =   10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14
target = 12

Sample Output
13
 */

// Average O(log(n)) time & O(1) space
// Worst: O(n) time & O(1) space

function findClosestValueInBst(tree, target) {
  // since we can asume there is a closest value,
  // then there is at least one node (root).
  let closestValue = tree.value;
  let node = tree;

  while (node) {
    if (node.value === target) {
      return node.value;
    } else {
      if (Math.abs(target - closestValue) > Math.abs(target - node.value)) {
        closestValue = node.value;
      }
      if (target < node.value) {
        node = node.left;
      } else if (target > node.value) {
        node = node.right;
      }
    }
  }
  return closestValue;
}
