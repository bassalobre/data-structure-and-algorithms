const worstCase = (nums) => {
    const elements = new Map();

    nums.forEach(n => {
        elements.set(n, { count: (elements.get(n)?.count || 0) + 1 });
    });

    return Array
        .from(elements)
        .find(([_, value]) => value.count >= (nums.length / 2))[0];
};

const avarageCase = (nums) => {
    const elements = {};

    nums.forEach(n => {
        elements[n] = (elements[n] || 0) + 1;
    });

    return Object
        .entries(elements)
        .find(([_, value]) => value >= (nums.length / 2))[0];
};

const bestCase = (nums) => {
    let candidate;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!count) candidate = nums[i];

        count += (nums[i] === candidate) ? 1 : -1;
    }

    return candidate;
};
