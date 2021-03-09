/*
133. Clone Graph
https://leetcode.com/problems/clone-graph/

Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.
Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

*/

/**
 * Definition for a Node.
 * 
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * Breadth First Search
 * Time complexity: O(V+E)
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
  if (!node) {
    return node;
  }
  
  const queue = [node];
  const hash = {};
  
  hash[node.val] = new Node(node.val);
  
  while(queue.length) {
    const current = queue.shift();
    current.neighbors.forEach(n => {
      // if the node 'n' is not yet visited
      if (hash[n.val] === undefined) {
        // copy the node 'n' to the new graph
        hash[n.val] = new Node(n.val);
        // add the node 'n' to the queue (keep traversing bfs)
        queue.push(n);
      }
      // connect the current new node with its neighbors in the new graph
      hash[current.val].neighbors.push(hash[n.val]);
    });
  }
  
  return hash[node.val];
};