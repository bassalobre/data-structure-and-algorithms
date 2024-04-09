const fizzBuzz = (n) =>  {
    const output = [];

    for (let i = 0; i < n; i++) {
        const number = i + 1;
        const isDivisibleByThree = !(number % 3);
        const isDivisibleByFive = !(number % 5);

        if (isDivisibleByThree) {
            output[i] = "Fizz";
        }

        if (isDivisibleByFive) {
            output[i] = !output[i] ? "Buzz" : output[i] + "Buzz";
        }

        if (!isDivisibleByThree && !isDivisibleByFive) {
            output[i] = String(number);
        }
    }

    return output;
};
