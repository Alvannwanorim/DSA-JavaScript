class UndirectedGraph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) return (this.adjacencyList[vertex] = []);
	}
	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = [];
		if (!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = [];
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}
}

function cloneGraph(graph) {
	let visited = {};
	let clone = new UndirectedGraph();
	for (const node in graph) {
		visited[node] = true;
		graph[node].forEach((neighboor) => {
			if (!visited[neighboor]) {
				clone.addEdge(node, neighboor);
			}
		});
	}
	return clone;
}

let graph = new UndirectedGraph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
console.log(graph.adjacencyList);
console.log(cloneGraph(graph.adjacencyList));
