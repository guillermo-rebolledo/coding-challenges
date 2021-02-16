// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

 /**
  Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
  Output: true

  Input: root = [1,2,3,null,4], x = 2, y = 3
  Output: false
*/

function isCousins(root, x, y) {
  function dfs(val, r = root, parent = null, depth = 0){
    if(!r) return false;
    if(r.val === val) return { depth, parent };

    depth += 1;
    return dfs(val, r.right, r.val, depth) || dfs(val, r.right, r.val, depth);
  }

  const { depth: depthX, parent: parentX} = dfs(x);
  const { depth: depthY, parent: parentY} = dfs(y);

  return (parentX !== parentY) && (depthX === depthY);
};