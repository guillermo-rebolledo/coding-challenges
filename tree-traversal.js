class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  create(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const addSide = (side) => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      }
      current = current[side];
    };

    while (true) {
      if (val === current.val) return this;
      if (val < current.val) addSide("left");
      else addSide("right");
    }
  }

  BFS() {
    const queue = [this.root];
    const visited = [];

    while (queue.length) {
      const current = queue.shift();
      visited.push(current.val);

      if (current) {
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }

    return visited;
  }

  DFS() {
    return this.preOrder();
    // return postOrder(root);
    // return inOrder(root);
  }

  preOrder() {
    let visited = [],
      current = this.root;

    let traverse = (node) => {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }

  postOrder() {
    let visited = [],
      current = this.root;

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    };

    traverse(current);
    return visited;
  }

  inOrder() {
    let visited = [],
      current = this.root;

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }
}

const tree = new BST();
tree.create(20);
tree.create(14);
tree.create(57);
tree.create(9);
tree.create(19);
tree.create(31);
tree.create(62);
tree.create(3);
tree.create(11);
tree.create(72);

console.log(tree);
console.log(tree.BFS());
console.log(tree.DFS());
