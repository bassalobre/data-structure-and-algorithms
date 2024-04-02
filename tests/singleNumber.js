
const avarageCase = (nums = []) => {
    nums.sort();

    while (nums.length - 1) {
        if (nums[0] === nums[1]) {
            nums.splice(0, 2);
        } else {
            nums.push(nums.shift());
        }
    }
    
    return nums[0];
};

const bestCase = (nums = []) => {
    let diff;

    for (let i = 0; i < nums.length; i++) {
        diff = diff ^ nums[i];
    }

    return diff;
};
