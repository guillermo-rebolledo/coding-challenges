/**
 * 872. Leaf-Similar Trees
 * https://leetcode.com/problems/leaf-similar-trees/

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/16/tree.png
For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Example 1:
https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-1.jpg
Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

Example 2:
Input: root1 = [1], root2 = [1]
Output: true

Example 3:
Input: root1 = [1], root2 = [2]
Output: false

Example 4:
Input: root1 = [1,2], root2 = [2,2]
Output: true
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leavesLeft = getLeavesByDFS(root1);
  const leavesRight = getLeavesByDFS(root2);

  if (leavesLeft.length === leavesRight.length) {
    for (let i = 0; i < leavesLeft.length; i++) {
      if (leavesLeft[i] !== leavesRight[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
};

function getLeavesByDFS(root) {
  const leaves = [];
  const current = root;

  const traverse = (node) => {
    if (!node.left && !node.right) {
      leaves.push(node.val);
    }

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(current);
  return leaves;
}

// Small Optimization (compare with strings)
var leafSimilar = function (root1, root2) {
  const leavesLeft = getLeavesByDFS(root1);
  const leavesRight = getLeavesByDFS(root2);

  return JSON.stringify(leavesLeft) === JSON.stringify(leavesRight);
};

function getLeavesByDFS(root) {
  const leaves = [];
  const current = root;

  const traverse = (node) => {
    if (!node.left && !node.right) {
      leaves.push(node.val);
    }

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(current);
  return leaves;
}
