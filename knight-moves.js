import Graph from './graph.js';

// implement breadth first search algorithm to find shortest paths between two vertices
// input: two arrays of two x, y coordinates (start and end)
// output: array of arrays of x, y coordinates of each square the knight will stop on along the way
export default function knightMoves(startCoords, endCoords, gridSize = 8) {
  // create new Graph
  const board = new Graph(gridSize);
  // find start vertex
  // find end vertex
  const path = board.breadthFirstSearch(startVertex, endVertex);
  console.log(path);
}

knightMoves([3, 3], [7, 7]);