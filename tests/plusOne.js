const plusOne = (digits) => {
    digits = BigInt(digits.join("")) + BigInt(1);
    digits = digits.toString();
    
    return digits.split("").map(num => Number(num));
};
