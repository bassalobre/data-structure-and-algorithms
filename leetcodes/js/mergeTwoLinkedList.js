const worstCase = (list1, list2) => {
    // convert to array
    const converted1 = [];
    while (list1) {
        converted1.push(list1.val);
        list1 = list1.next;
    }

    const converted2 = [];
    while (list2) {
        converted2.push(list2.val);
        list2 = list2.next;
    }

    // merge both on the same array
    const mergedArr = [...converted1, ...converted2];

    // sort the array
    mergedArr.sort((a,b) => a - b);
    
    if (!mergedArr.length) return null;

    // convert to linked list again
    const head = { val: mergedArr[0], next: null };
    const recursive = (node, i) => {
        if (mergedArr[i] === undefined) return null;

        node.next = { val: mergedArr[i], next: null };
        recursive(node.next, i++);

        return node;
    }

    recursive(head, 1);

    return head;
};

const bestCase = (list1, list2) => {
    if (!list1 || !list2) return list1 || list2;

    // start the head node with the smallest value
    let head;
    if (list1.val < list2.val) {
        head = list1.val;
        list1 = list1.next;
    } else {
        head = list2.val;   
        list2 = list2.next
    }

    const merged = { val: head, next: null };

    // merge the lists sorting the values
    let current = merged;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    // if one of the lists is not empty, add the rest of it to the merged list
    if (list1) {
        current.next = list1;
    }

    if (list2) {
        current.next = list2;
    }

    return merged;
};
