import Vertex from './vertex.js';
import Graph from './graph.js';

// implement Dijkstra's algorithm to find shortest paths between two vertices
// input: two arrays of two x, y coordinates (start and end)
// output: array of arrays of x, y coordinates of each square the knight will stop on along the way
export default function knightMoves(start, end, gridSize = 8) {
  // create new Graph
  const board = new Graph(gridSize);

  // distance hash table
  const dist = {};
  // previous hash table
  const prev = {};

  // for each vertex v
  board.vertices.forEach((vertex) => {
    // console.log(vertex.coords);
    // dist[v] = infinity
    dist[vertex.index] = Infinity;
    // prev[v] = none
    prev[vertex.index] = null;
  });

  const startIndex = Vertex.getIndex(...start, gridSize);
  const endIndex = Vertex.getIndex(...end, gridSize);
  console.log(dist[startIndex]);
  console.log(dist[endIndex]);
  

  // dist[source] = 0
  // set all vertices to unexplored
  // while destination not explored
    // v = least-valued unexplored vertex
    // set v to explored
    // for each edge (v, w)
      // if dist[v] + len(v, w) < dist[w]
        // dist[w] = dist[v] + len(v, w)
        // prev[w] = v
}

knightMoves([3, 3], [7, 7]);