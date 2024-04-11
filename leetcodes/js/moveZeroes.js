const moveZeroes = (nums = []) => {
    const zeroes = [];

    let i = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            zeroes.push(...nums.splice(i, 1))
        } else {
            i++;
        }
    }

    while (zeroes.length) {
        nums.push(zeroes.pop());
    }
};
