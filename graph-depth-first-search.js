/**
Depth-first Search

You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.
Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach
(specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

Sample Input
graph = A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K

Sample Output
["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]


personal note:
children of A would be [B, E, F, I, J, C, D, G, K, H]
children of B would be [E, F, I, J]
children of C would be []
children of D would be [G, K]
children of G would be [K]
children of H would be []
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

  // Time complexity: O(V+E)
  //		where V is the number of vertices of the graph and E are the number of edges
  // Space complexity: O(V)
  //		we are storing an array of values, but MAINLY it is O(V) because of the call stack
  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }

    return array;
  }
}
