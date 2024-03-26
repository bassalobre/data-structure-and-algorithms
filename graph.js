const graph = new Map();

function addNode(node) {
    graph.set(node, []);
}

function addEdge(node1, node2) {
    graph.get(node1).push(node2);
    graph.get(node2).push(node1);
}

export { graph, addNode, addEdge };
