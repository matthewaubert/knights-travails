import Vertex from './vertex.js';

// create new graph
// input: grid size (defaults to 8, the size of a chess board)
// properties:
  // numVertices: number of vertices
  // vertices: array of vertices, each with coordinates and an adjacency list
export default class Graph {
  constructor(gridSize = 8) {
    this.numVertices = gridSize ** 2;
    this.vertices = Graph.#buildGraph(gridSize);
  }

  // create a new graph given 'n' grid size
  // output: array of vertices, each with coordinates and an adjacency list
  static #buildGraph(n) {
    const vertices = [];

    // do this n times
    for (let i = 0; i < n; i++) {
      // do this n times
      for (let j = 0; j < n; j++) {
        // build a Vertex and push to vertices
        vertices.push(new Vertex(i, j, n));
      }
    }

    return vertices;
  }

  // check whether there is an edge btw two vertices
  // isEdge
}

// const board = new Graph();
// console.log('Number of vertices: ', board.numVertices);
// board.vertices.forEach((vertex) => {
//   console.log(vertex.index);
//   console.log('vertex coords', vertex.coords);
//   console.log(vertex.adjList);
// });
