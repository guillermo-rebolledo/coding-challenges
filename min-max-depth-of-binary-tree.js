class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_minimum_depth = function(root) {
  if (!root) return 0;

  let minimumTreeDepth = 0;
  const queue = [root];

  while(queue.length) {
    let levelSize = queue.length;
    minimumTreeDepth += 1;

    for(let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      if (!current.left && !current.right) {
        return minimumTreeDepth;
      }

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
  }
};

function find_maximum_depth(root) {
  if (root === null) {
    return 0;
  }

  const queue = [root];
  let maximumTreeDepth = 0;
  while (queue.length > 0) {
    maximumTreeDepth += 1;
    const levelSize = queue.length;
    for (i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
  return maximumTreeDepth;
}


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);