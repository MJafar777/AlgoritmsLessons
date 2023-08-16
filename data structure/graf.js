class Graph {
  constructor() {
    this.adjencyList = {}; //Bu adjective list
  }
  addVertex(vertex) {
    if (!this.adjencyList[vertex]) this.adjencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (this.adjencyList[vertex1] && this.adjencyList[vertex2]) {
      this.adjencyList[vertex1].push(vertex2);
      this.adjencyList[vertex2].push(vertex1);
    } else {
      return "Please login";
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjencyList[vertex1] = this.adjencyList[vertex1].filter(
      (e) => e !== vertex2
    );
    this.adjencyList[vertex2] = this.adjencyList[vertex2].filter(
      
      (e) => e !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjencyList[vertex].length) {
      
      let vertex2 = this.adjencyList[vertex].pop();
      this.removeEdge(vertex, vertex2);
    }
    delete this.adjencyList[vertex];
  }
}

let graph = new Graph();
graph.addVertex("Tokio");
graph.addVertex("Sidney");
graph.addVertex("Jakarta");
graph.addVertex("Singapur");
graph.addEdge("Tokio", "Sidney");
graph.addEdge("Jakarta", "Sidney");
graph.addEdge("Singapur", "Sidney");
console.log(graph);
graph.removeVertex("Singapur");
console.log(graph);