import { linkedList, createFromArray } from './../linked-list.js';

const iterative = (head) => {
    let reverse = null;

    while (head) {
        const temp = head.next;

        head.next = reverse;
        reverse = head;
        head = temp;
    }

    return reverse;
}

const recursive = (head, reverse = null) => {
    if (!head) return reverse;

    const temp = head.next;

    head.next = reverse;
    reverse = head;
    head = temp;

    return recursive(head, reverse);
}

createFromArray([1,2,3,4,5]);
