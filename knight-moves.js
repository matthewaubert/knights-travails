import Graph from './graph.js';

// shows the shortest possible path, in chess, for a knight to get from one square
// to another by outputting the coordinates of all squares it would stop on along the way
// input: two arrays of two x, y coordinates (start and end), grid size (defaults to 8 for a chess board)
// output: calls printPath to print path
export default function knightMoves(startCoords, endCoords, gridSize = 8) {
  const graph = new Graph(gridSize); // create new Graph
  const startVertex = graph.find(startCoords); // find start vertex
  const endVertex = graph.find(endCoords); // find end vertex
  // perform breadth-first search to find shortest path from startVertex to endVertex
  const path = graph.breadthFirstSearch(startVertex, endVertex);

  printPath(startCoords, endCoords, path);
}

// print to console given path found by breadth-first search
function printPath(startCoords, endCoords, path) {
  console.log(`> knightMoves([${startCoords}],[${endCoords}])`);
  console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);

  // while path stack > 0
  while (path.length > 0) {
    const square = path.pop(); // pop square off path stack
    console.log(`  [${square.coords}]`); // print square coords
  }
}

knightMoves([3, 3], [4, 3]);
