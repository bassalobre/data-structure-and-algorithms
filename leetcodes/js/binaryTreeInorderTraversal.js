import { binaryTree, createBinaryTreeFromArray } from "./../tree.js"

const recursive = (root, visited = []) => {
    if (!root) return visited;

    recursive(root.left, visited);
    visited.push(root.val);

    return recursive(root.right, visited);
}

const iterative = (root) => {
    const stack = [];
    const visited = [];

    let currentNode = root;

    while(currentNode || stack.length) {
        while(currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = stack.pop();
        visited.push(currentNode.val);
        currentNode = currentNode.right;
    }

    return visited;
}

createBinaryTreeFromArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);