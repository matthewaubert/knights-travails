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
  find(coords, gridSize = 8) {
    const index = Vertex.getIndex(...coords, gridSize); // get index
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
    // console.log(root);
    // console.log(target);
    // distance hash table
    const dist = {};
    // prevs hash table
    const prevs = {};
    // visited hash table
    const visited = {};
  
    // for each vertex v
    this.vertices.forEach(vertex => {
      // dist[v] = infinity
      dist[vertex.index] = Infinity;
      // prevs[v] = empty array
      prevs[vertex.index] = [];
      // visited[v] = false
      visited[vertex.index] = false;
    });
  
    // dist[root] = 0
    dist[root.index] = 0;
    prevs[root.index] = null;
    // let q be an empty queue
    const q = [];
    // q.enqueue root
    q.push(root);
    // console.log(q);
  
    // while destination not visited
    while (!visited[target.index]) {
      // v = q.dequeue
      const vertex = q.shift();
      // console.log(vertex);
      // visited[v] = true
      visited[vertex.index] = true;
      // for each v adjacency w
      vertex.adjList.forEach(coords => {
        // find vertex by coords
        const adj = this.find(coords);
        // if dist[v] + 1 < dist[w]
        if (dist[vertex.index] + 1 < dist[adj.index]) {
          // q.enqueue w
          q.push(adj);
          // prevs[w] = [v]
          prevs[adj.index] = [vertex];
          // dist[w] = dist[vertex] + 1
          dist[adj.index] = dist[vertex.index] + 1;
        } else if (dist[vertex.index] + 1 === dist[adj.index]) {
          // q.enqueue w
          q.push(adj);
          // prevs[w].push v
          prevs[adj.index].push(vertex);
        }
      });
    }
  
    // once target is visited, trace back to root
    // by following all prev paths in depth-first in-order search
    return Graph.#inOrder(prevs, target);
  }

  // recursively retrace given 'previous' hash table from root vertex
  static #inOrder(table, root) {
    // base case: if table[root] is null, return [[root]]
    if (table[root.index] === null) return [[root.coords]];

    // let paths be an empty stack
    const paths = [];
    // for each vertex in table[root]
    for (let i = 0; i < table[root.index].length; i++) {
      // recursive step: inOrder traverse vertex
      const subPaths = Graph.#inOrder(table, table[root.index][i]);
      // for each subpath, form array w/ root and push to paths
      subPaths.forEach(subPath => {
        paths.push([root.coords, ...subPath]);
      });
    }

    // return paths
    return paths;
  }
}

// const board = new Graph();
// console.log('Number of vertices: ', board.numVertices);
// board.vertices.forEach((vertex) => {
//   console.log(vertex.index);
//   console.log('vertex coords', vertex.coords);
//   console.log(vertex.adjList);
// });
