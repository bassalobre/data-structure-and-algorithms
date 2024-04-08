const worstCase = (l1, l2) => {
    // convert linked list to array and reverse the numbers to sum
    // O(n) time complexity and O(n) space complexity
    const arr1 = [];
    while (l1) {
        arr1.unshift(l1.val);
        l1 = l1.next;
    }

    // O(n) time complexity and O(n) space complexity
    const arr2 = [];
    while (l2) {
        arr2.unshift(l2.val);
        l2 = l2.next;
    }

    // convert array to number and sum values
    const num1 = BigInt(arr1.join(""));
    const num2 = BigInt(arr2.join(""));
    const sum = (num1 + num2).toString();

    // convert sum to array
    const sumArr = sum.split("");

    // reverse sum and convert to linked list
    const head = { val: sumArr[sumArr.length - 1], next: null };
    
    // O(n) time complexity
    let current = head;
    for (let i = sumArr.length - 2; i >= 0; i--) {
        const node = { val: sumArr[i], next: null };

        current.next = node;
        current = node;
    }

    return head;
};
