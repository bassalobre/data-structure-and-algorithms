import { binaryTree, createBinaryTreeFromArray } from './../tree.js';

const recursive = (root, current = 0, max = 0) => {
    if (!root && !current) return 0;
    if (!root) return max + 1;

    current++;
    max = Math.max(max, current);

    if (root.left) {
        max = recursive(root.left, current, max);
    }
    
    if (root.right) {
        max = recursive(root.right, current, max);
    }

    return max;
}

const iterative = (root) => {
    if (!root) return 0;

    const queue = [root];
    let depth = 0;

    while(queue.length) {
        let size = queue.length;

        while(size) {
            const currentNode = queue.shift();

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);

            size--;
        }

        depth++;
    }

    return depth;
}

createBinaryTreeFromArray([3,9,20,null,null,15,7]);
