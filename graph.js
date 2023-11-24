import Vertex from './vertex.js';

// create new graph
// input: grid size (defaults to 8, the size of a chess board)
// properties:
//   numVertices: number of vertices
//   vertices: array of vertices, each with coordinates and an adjacency list
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

  // find and return vertex with given coordinates
  find(coords) {
    const index = Vertex.getIndex(...coords); // get index
    return this.vertices[index];
  }

  // binary search algorithm
  static #binarySearch(array, targetIndex, start = 0, end = array.length - 1) {
    // base case: if array is size 0, return null (not found)
    if (array.length < 0) return null;

    // calculate mid point of array
    const mid = end / 2;
    // if target found at mid, return target
    if (array[mid].index === targetIndex) return array[mid];
    // recursive step: else if target < mid, set end point to mid - 1 and repeat
    else if (targetIndex < mid)
      return Graph.#binarySearch(array, targetIndex, start, mid - 1);
    // recursive step: else if target > mid, set start point to mid + 1 and repeat
    else if (targetIndex > mid)
      return Graph.#binarySearch(array, targetIndex, mid + 1, end);
  }

  // find shortest paths between starting vertex and ending vertex
  // input: starting (root) vertex, ending (target) vertex
  // output: array of each step taken to traverse from root to target (inc. root and target)
  breadthFirstSearch(root, target) {
    // distance hash table
    // prev hash table
    // visited hash table
  
    // for each vertex v
      // dist[v] = infinity
      // prev[v] = null
      // visited[v] = false
  
    // dist[root] = 0
    // let q be an empty queue
    // q.enqueue root
  
    // while destination not visited
      // v = q.dequeue
      // visited[v] = true
      // for each v adjacency w
        // if dist[v] + 1 < dist[w]
          // q.enqueue w
          // prev[w] = v
          // dist[w] = dist[prev[w]] + 1
  
    // let s be an empty stack
    // once target is visited, trace back to root by following prev vertices
    // let v = target
    // while v != root
      // s.push target
      // v = prev[v]
  
    // return s
  }
}

// const board = new Graph();
// console.log('Number of vertices: ', board.numVertices);
// board.vertices.forEach((vertex) => {
//   console.log(vertex.index);
//   console.log('vertex coords', vertex.coords);
//   console.log(vertex.adjList);
// });
