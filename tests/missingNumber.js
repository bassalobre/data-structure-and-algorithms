const worstCase = (nums) => {
    nums.sort((a, b) => a - b);

    if (nums[0] !== 0) return 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] && nums[i + 1] !== nums[i] + 1)
            return nums[i] + 1;
    }

    return nums.length;
};

const avarageCase = (nums) => {
    const sum = nums.reduce((acc, num) => acc + num, 0);

    return (nums.length * (nums.length + 1) / 2) - sum;
};

const bestCase = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return (nums.length * (nums.length + 1) / 2) - sum;
};
