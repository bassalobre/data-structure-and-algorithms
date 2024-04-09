let linkedList = null;

const createListNode = ({ val, next }) => ({ val, next });

function createFromArray(arr) {
  if (arr.length === 0) return;

  const head = createListNode({ val: arr[0], next: null });

  let current = head;
  for (let i = 1; i < arr.length; i++) {
    const tail = createListNode({ val: arr[i], next: null });

    current.next = tail;
    current = tail;
  }

  linkedList = head;
}

export { linkedList, createListNode, createFromArray };
