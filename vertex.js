// create a new vertex for a graph
// input: x, y coordinates, grid size
// properties:
//   coords: array of x, y coordinates of vertex position
//   adjList: array of arrays of valid x, y coordinates a knight could move to
export default class Vertex {
  constructor(x, y, gridSize) {
    this.index = Vertex.getIndex(x, y, gridSize);
    this.coords = [x, y]; // e.g. [3, 3]
    this.adjList = Vertex.#buildAdjList(this.coords, gridSize);
    // e.g. [[1, 2], [1, 4], [2, 1], [2, 5], [4, 1], [4, 5], [5, 2], [5, 4]]
    this.visited = false;
  }

  static getIndex(x, y, gridSize) {
    return x * gridSize + y;
  }

  // build list of valid adjacency coordinate arrays
  // (i.e. valid x, y coordinates a knight could move to)
  // input: coords (array of x, y coordinates), grid size
  // output: array of adjacency coordinates
  static #buildAdjList(vertexCoords, gridSize) {
    const adjList = [];
    // for each delta
    Vertex.#deltas.forEach((delta) => {
      // create adjacency by adding delta values to coords values of same index
      const adj = [vertexCoords[0] + delta[0], vertexCoords[1] + delta[1]];

      // if both adjacency values are valid, push to adjList
      if (Vertex.#isAdjValid(adj, gridSize)) adjList.push(adj);
    });

    return adjList;
  }

  // array of 8 ways a knight could move in x, y axis
  static #deltas = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  // return boolean value whether given adjacency's
  // x, y coordinates are valid given grid size
  static #isAdjValid(adj, gridSize) {
    for (let i = 0; i < adj.length; i++) {
      if (adj[i] < 0 || adj[i] >= gridSize) return false;
    }

    return true;
  }
}
