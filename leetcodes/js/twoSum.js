const worstCase = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];

            if (sum === target) {
                return [i, j];
            }
        }
    }

    return [];
};

const avarageCase = (nums, target) => {
    const numIndices = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        numIndices.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numIndices.has(complement) && numIndices.get(complement) !== i) {
            return [numIndices.get(complement), i];
        }
    }
    
    return [];
};

const bestCase = (nums, target) => {
    const numIndices = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        }
        
        numIndices.set(nums[i], i);
    }
    
    return [];
};
