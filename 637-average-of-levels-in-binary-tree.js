/**
 * 637. Average of Levels in Binary Tree
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const avgs = [];
  BFS(root, 0);
  return avgs.map(({ total, num }) => total / num);

  function BFS(node, level) {
    if (!node) return;
    if (!avgs[level]) {
      avgs.push({ total: node.val, num: 1 });
    } else {
      avgs[level].total += node.val;
      avgs[level].num += 1;
    }

    BFS(node.left, level + 1);
    BFS(node.right, level + 1);
  }
};

// Iterative solution
function find_level_averages(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length,
      levelSum = 0.0;
    for (i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      // add the node's value to the running sum
      levelSum += currentNode.val;
      // insert the children of current node to the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    // append the current level's average to the result array
    result.push(levelSum / levelSize);
  }

  return result;
}
