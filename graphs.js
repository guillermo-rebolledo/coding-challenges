// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

// add edge, undirected
function addEdge(origin, dest) {
  adjacencyList.get(origin).push(dest);
  adjacencyList.get(dest).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));


function bfs(start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const dest of destinations) {
      if (!visited.has(dest)) {
        visited.add(dest);
        queue.push(dest);
        console.log(dest === 'BKK' ? `Found it ${dest}` : dest);
      }
    }
  }
}

console.log(`BFS, start: PHX`);
bfs('PHX');

function dfs(start, visited = new Set()) {
  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const dest of destinations) {
    if (!visited.has(dest)) {
        dfs(dest, visited);
        console.log(dest === 'BKK' ? `Found it ${dest}` : dest);
      }
  }
}

console.log(`DFS, start: PHX`);
dfs('PHX');

