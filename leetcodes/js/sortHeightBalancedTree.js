const recursive = (nums) => {
    if (nums.length === 0) return null;

    const pivot = Math.floor(nums.length / 2);
    const root = { val: nums[pivot], left: null, right: null };

    root.left = recursive(nums.slice(0, pivot));
    root.right = recursive(nums.slice(pivot + 1, nums.length));

    return root;
};
