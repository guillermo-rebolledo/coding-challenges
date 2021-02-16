// Represent the routes of the airports in a graph.

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// WE CAN REPRESENT GRAPHS WITH ADJACENCY MATRIX OR LISTS

// IN THIS CASE, THERES NOT A LOT OF COMBINATIONS OF AIRPORTS (ROUTES) SO
// A MATRIX WOULD OCCUPY A LOT OF UNNECESARY SPACE. SO WE MAKE A LIST (MAP)

const adjacencyList = new Map();

// A node is the airport, the edge is what connects them (route)
function addNode(airport) {
  adjacencyList.set(airport, []);
}

function addEdge(origin, desination) {
  adjacencyList.get(origin).push(desination);
  adjacencyList.get(desination).push(origin);
}

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

console.log(adjacencyList);

// Figure out if there is a route between PHX and BKK

function BFS(root) {
  const queue = [root];
  const visited = new Set();

  while (queue.length) {
    const airport = queue.shift();
    const desinations = adjacencyList.get(airport);

    for (const destination of desinations) {
      if (destination === "BKK") {
        console.log(destination, " found it!");
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination, " visited");
      }
    }
  }
}

BFS("PHX");
console.log("--------");

function DFS(root, visited = new Set()) {
  visited.add(root);

  const destinations = adjacencyList.get(root);

  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log("DFS found it!");
      return;
    }

    if (!visited.has(destination)) {
      console.log(destination);
      DFS(destination, visited);
    }
  }
}

DFS("PHX");
