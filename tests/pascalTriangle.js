const worstCase = (numRows) => {
    const output = [];

    for (let i = 0; i < numRows; i++) {
        const line = [];

        line[0] = 1;
        line[i] = 1;

        output.push(line);
    }
    
    for (let i = 0; i < output.length; i++) {
        const line = output[i];

        let current = i;
        while (current > 1) {
            const prev = output[i - 1];
            line[current - 1] = prev[current - 1] + prev[current - 2];

            current--;
        }
    }

    return output;
}

const avarageCase = (numRows) => {
    const output = [];

    for (let i = 0; i < numRows; i++) {
        const line = [];
        line[0] = 1;
        line[i] = 1;

        let current = i;
        while (current > 1) {
            const prev = output[i - 1];
            line[current - 1] = prev[current - 1] + prev[current - 2];

            current--;
        }

        output.push(line);
    }

    return output;
}
