// Time Complexity: O(N)
// Space Complexity: O(N)
// Approach: BFS

function find_minimum_depth(root) {
  if (root === null) {
    return 0;
  }

  const queue = [root];
  let minimumTreeDepth = 0;

  while (queue.length > 0) {
    minimumTreeDepth += 1;
    const levelSize = queue.length;
    for (i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      // check if this is a leaf node
      if (currentNode.left === null && currentNode.right === null) {
        return minimumTreeDepth;
      }
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
}
