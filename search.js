function bfs(graph, start, end) {
    const visited = new Set();
    const queue = [start];

    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift();
        const neighbors = graph.get(node);

        for (const neighbor of neighbors) {
            if (neighbor === end) {
                return { found: true, path: visited };
            }

            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return { found: false, path: visited };
}

function dfs(graph, start, end, visited = new Set()) {
    visited.add(start);

    const neighbors = graph.get(start);

    for (const neighbor of neighbors) {
        if (neighbor === end) {
            return { found: true, path: visited };
        }

        if (!visited.has(neighbor)) {
            return dfs(graph, neighbor, end, visited);
        }
    }

    return { found: false, path: visited };
}

export { bfs, dfs };
