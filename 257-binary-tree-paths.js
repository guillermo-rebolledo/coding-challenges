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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];
  const path = [];
  return dfs(root, path, res);
};

function dfs(root, res, path) {
  if (!root) {
    return res;
  }
  path.push(root.val);

  if (!root.left && !root.right) {
    res.push(path.join("->"));
  } else {
    dfs(root.left, res, path.slice());
    dfs(root.right, res, path.slice());
  }
  return res;
}
