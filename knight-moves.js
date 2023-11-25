import Graph from './graph.js';

// implement breadth first search algorithm to find shortest paths between two vertices
// input: two arrays of two x, y coordinates (start and end)
// output: array of arrays of x, y coordinates of each square the knight will stop on along the way
export default function knightMoves(startCoords, endCoords, gridSize = 8) {
  // create new Graph
  const graph = new Graph(gridSize);
  // find start vertex
  const startVertex = graph.find(startCoords);
  // find end vertex
  const endVertex = graph.find(endCoords);
  const path = graph.breadthFirstSearch(startVertex, endVertex);

  // paths.forEach((path, i) => {
  //   console.log(i);
  //   console.log(path);
  // });

  // while path stack > 0
  while (path.length > 0) {
    // pop square off path stack
    const square = path.pop();
    // print square coords
    console.log(square.coords);
  }
}

knightMoves([3, 3], [4, 3]);