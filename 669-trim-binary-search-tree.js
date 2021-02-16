/**
 * 669. Trim a Binary Search Tree
 * https://leetcode.com/problems/trim-a-binary-search-tree/

Given the root of a binary search tree and the lowest and highest boundaries as low and high,
trim the tree so that all its elements lies in [low, high].
Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant).
It can be proven that there is a unique answer.

Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.

Example 1:
https://assets.leetcode.com/uploads/2020/09/09/trim1.jpg
Input: root = [1,0,2], low = 1, high = 2
Output: [1,null,2]


Example 2
https://assets.leetcode.com/uploads/2020/09/09/trim2.jpg
Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
Output: [3,2,null,1]

Example 3:
Input: root = [1], low = 1, high = 2
Output: [1]

Example 4:
Input: root = [1,null,2], low = 1, high = 3
Output: [1,null,2]

Example 5:
Input: root = [1,null,2], low = 2, high = 4
Output: [2]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) return null;

  if (root.val > high) {
    // skip and go left
    return trimBST(root.left, low, high);
  }
  if (root.val < low) {
    // skip and go right
    return trimBST(root.right, low, high);
  }
  // connect left and right child to the next qualified node
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};
