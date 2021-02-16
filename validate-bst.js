/**
Validate BST

Write a function that takes in a potentially invalid Binary Search Tree (BST) and returns a boolean representing whether the BST is valid.
Each BST node has an integer value, a left child node, and a right child node.
  A node is said to be a valid BST node if and only if it satisfies the BST property:
    its value is strictly greater than the values of every node to its left;
    its value is less than or equal to the values of every node to its right;
    and its children nodes are either valid BST nodes themselves or None / null.
A BST is valid if and only if all of its nodes are valid BST nodes.

Sample Input
tree =   10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

Sample Output
true
 */

// O(n) time - n is the number of nodes in the BST
// O(d) space - where 'd' is the depth of the tree (depth of the longest branch)
function validateBst(tree) {
  return validateHelper(tree, -Infinity, Infinity);
}

// Helper function that helps us validate if the tree is a valid BST.
function validateHelper(tree, minVal, maxVal) {
  // If the root is null then we can assume that it is valid.
  if (!tree) return true;

  // If the tree value is less than the minValue or greater or equal than the maxValue
  // then we conclude that the tree is not a BST (invalid).
  if (tree.value < minVal || tree.value >= maxVal) {
    return false;
  }

  // We use recursion to check the left side of the tree as well as the right side.
  /**
   * For the left side:
   *    We minValue remains the same as the previous level but we now know that
   *    the new maxValue will be the current node value. Since we are on the left side,
   *     we know that the child nodes values on the left cant be greater than the previous visited node.
   * For the right side:
   *    We maxValue remains the same as the previous level but we now know that
   *    the new minValue will be the current node value. Since we are on the right side,
   *    we know that the child nodes values on the right cant be less than the previous visited node.
   * For the right side:
   */
  const leftIsValid = validateHelper(tree.left, minVal, tree.value);
  const rightIsValid = validateHelper(tree.right, tree.value, maxVal);

  return leftIsValid && rightIsValid;
}
