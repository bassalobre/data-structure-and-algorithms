import { graph, addNode, addEdge } from "./graph.js";
import { bfs, dfs } from "./search.js";

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

airports.forEach(addNode);
routes.forEach(([origin, destination]) => addEdge(origin, destination));

console.log("Graph: undirected, not weighted, no cycles");
console.log(graph);

console.log("---------------");
console.log("BFS:");
console.log("---------------");
const bfsResult = bfs(graph, "PHX", "BKK");
console.log(bfsResult);

console.log("---------------");
console.log("DFS:");
console.log("---------------");
const dfsResult = dfs(graph, "PHX", "BKK");
console.log(dfsResult);
