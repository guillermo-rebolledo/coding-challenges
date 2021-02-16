/*
River Sizes

You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size.
Note that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.
Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order.

Sample Input
matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
]

Sample Output
[1, 2, 2, 2, 5] // The numbers could be ordered differently.

// The rivers can be clearly seen here:
// [
//   [1,  ,  , 1,  ],
//   [1,  , 1,  ,  ],
//   [ ,  , 1,  , 1],
//   [1,  , 1,  , 1],
//   [1,  , 1, 1,  ],
// ]

 */

/*
    Algorithm:

    - We can solve this problem with a graph traversal approach:
      * If we visit a node of value 0 we do nothing at all, but if we visit a node of value 1, we then look at the neighbor nodes (up, down, left, right)
        and traverse these neighbor nodes to see if we have more 1's (river so we keep counting) or if we stop counting.
      * We can have the cases where either the top,left,right ot bottom of a node dont exist, or the neighbor node is already visited.
        That is why we have an auxiliary matrix with the same size of the original where we keep track of the nodes that we already visited.

      So:

      - We declare a result array in which we will store the sizes of the rivers we find.
      - We declare a new matrix with the same dimensions and we fill it with initial values of false.
      - We iterate the matrix and check:
        * If we already visited that node, we skip and continue to the next one.
        * If we haven't visitedthat node, we traverse it with the help of a separate function (more readability)
      - When traversing the nodes, we:
        * Declare a variable that keeps track of the river that can be formed with the nodes that we traverse.
        * Declare an array that can help us keep track of the nodes that we will have to traverse. (We save the position indices)
        * We iterate over this array of nodes that we need to traverse as long as there is items in it:
            # we extract one node from the array and make it the 'current' node
            # if this node has been visited, we skip the rest and go on to the next one
            # if this node hasn't been visited, we mark it as visited in the auxiliary matrix (false -> true)
            # if this node is a 0, then we skip the rest and go on to the next one
            # if this node has NOT been visited and it's value is 1, then we increase the size of the current river
            # we get the neighbors of this node that have not been visited before (so that we don't go over nodes that have already been visited)
            # we push these unvisited neighbor nodes to the array of nodes that we still need to traverse
        * when we are done traversing the nodes we need to explore, if the size of the river is greater than 0, then we push this value to the result array (sizes)
      - We have another helper function that gives us the unvisited neighbors of a current node so that we know which nodes we can still visit to possibly add up to the river size
*/

function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map((row) => row.map((value) => false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) {
        continue;
      }

      traverseNode(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  const nodesToExplore = [[i, j]];

  while (nodesToExplore.length) {
    let currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];

    if (visited[i][j]) {
      continue;
    }

    visited[i][j] = true;

    if (matrix[i][j] === 0) {
      continue;
    }

    currentRiverSize += 1;
    let unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);

    for (const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }

  if (currentRiverSize > 0) {
    sizes.push(currentRiverSize);
  }
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];

  // top neighbor
  if (i > 0 && !visited[i - 1][j]) {
    unvisitedNeighbors.push([i - 1, j]);
  }

  // bottom neighbor
  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvisitedNeighbors.push([i + 1, j]);
  }

  // left neighbor
  if (j > 0 && !visited[i][j - 1]) {
    unvisitedNeighbors.push([i, j - 1]);
  }

  // right neighbor
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
    unvisitedNeighbors.push([i, j + 1]);
  }

  return unvisitedNeighbors;
}
