// create a new vertex for a graph
// input: x, y coordinates, grid size
// properties:
//   coords: array of x, y coordinates of vertex position
//   adjList: array of adjacency indices a knight could move to
export default class Vertex {
  constructor(x, y, gridSize) {
    this.index = Vertex.getIndex(x, y, gridSize);
    this.coords = [x, y]; // e.g. [3, 3]
    this.adjList = Vertex.#buildAdjList(this.coords, gridSize);
    // e.g. [10, 12, 17, 21, 33, 37, 42, 44]
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
      // create adjacency index
      // by adding delta values to coords values and finding index
      const adjIndex = Vertex.getIndex(
        vertexCoords[0] + delta[0],
        vertexCoords[1] + delta[1],
        gridSize,
      );

      // if adjacency index is valid, push to adjList
      if (Vertex.#isAdjValid(adjIndex, gridSize)) adjList.push(adjIndex);
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
  // index is valid given grid size
  static #isAdjValid(adjIndex, gridSize) {
    if (adjIndex >= 0 && adjIndex < gridSize ** 2) return true;

    return false;
  }
}
