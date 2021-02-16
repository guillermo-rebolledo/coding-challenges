/**
Breadth-first Search

You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.
Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

Sample Input
graph = A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K

Sample Output
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
 */

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // Time complexity: O(E+V) - E are the edges of the graph and V are the vertices of the graph
  // Space complexity: O(V) - Because we store an array of names, MAINLY because of the queue we use to traverse the graph.
  breadthFirstSearch(array) {
    const queue = [this];

    while (queue.length > 0) {
      const current = queue.shift();

      array.push(current.name);
      queue.push(...current.children);
    }

    return array;
  }
}
