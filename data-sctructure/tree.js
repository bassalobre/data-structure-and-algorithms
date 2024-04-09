let binaryTree = null;

const createBinaryTreeNode = ({ val, left, right }) => ({ val, left, right });

function createBinaryTreeFromArray(arr) {
    if (arr.length === 0) return;

    const root = createBinaryTreeNode({ val: arr[0], right: null, left: null });
    const queue = [root];

    let i = 1;
    while(i < arr.length) {
        const currentNode = queue.shift();

        if (arr[i] !== null) {
            currentNode.left = createBinaryTreeNode({ val: arr[i], right: null, left: null });
            queue.push(currentNode.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            currentNode.right = createBinaryTreeNode({ val: arr[i], right: null, left: null });
            queue.push(currentNode.right);
        }
        i++;
    }

    binaryTree = root;
}

export { binaryTree, createBinaryTreeFromArray };
