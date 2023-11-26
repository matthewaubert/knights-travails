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

  // find and return vertex with given coordinates
  find(coords, gridSize = 8) {
    const index = Vertex.getIndex(...coords, gridSize); // get index
    return this.vertices[index];
  }

  // find shortest path between starting vertex and ending vertex
  // input: starting (root) vertex, ending (target) vertex
  // output: array of each step taken to traverse from root to target in reverse (inc. root and target)
  breadthFirstSearch(root, target) {
    const dist = {}; // distance hash table
    const prev = {}; // previous hash table
    const visited = {}; // visited hash table

    // for each vertex
    this.vertices.forEach((vertex) => {
      dist[vertex.index] = Infinity; // set dist to Infinity
      prev[vertex.index] = null; // set prev to null
      visited[vertex.index] = false; // set visited to false
    });

    dist[root.index] = 0; // set root dist to 0
    const q = []; // init empty queue
    q.push(root); // q.enqueue root

    // while destination not visited
    while (!visited[target.index]) {
      const vertex = q.shift(); // current vertex = q.dequeue
      visited[vertex.index] = true; // mark current vertex as visited
      // for each vertex adjacency
      vertex.adjList.forEach((coords) => {
        const adj = this.find(coords); // find vertex by coords
        // if vertex dist + 1 < adjacency dist
        if (dist[vertex.index] + 1 < dist[adj.index]) {
          q.push(adj); // q.enqueue adjacency
          prev[adj.index] = vertex; // set adj prev to vertex
          dist[adj.index] = dist[vertex.index] + 1; // set adj dist to vertex dist + 1
        }
      });
    }

    // once target is visited, trace back to root by following prev vertices
    const path = []; // init empty stack
    path.push(target); // push target to stack
    let vertex = target; // set vertex to target

    // while vertex != root
    while (vertex.index !== root.index) {
      vertex = prev[vertex.index]; // set vertex to its prev
      path.push(vertex); // push vertex to stack
    }

    return path;
  }
}
