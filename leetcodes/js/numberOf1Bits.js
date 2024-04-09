const hammingWeight = (n) => {
    return n
        .toString(2)
        .split("")
        .filter(char => char === "1")
        .length;
};
