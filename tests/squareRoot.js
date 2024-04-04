const squareRoot = (x) => {
    if (x <= 1) return x;

    let divisor = 2;
    let temp = x;

    while (true) {
        temp = Math.floor(temp / divisor);

        if (temp * temp > x) {
            divisor++;
            temp = x;

            continue;
        }

        break;
    }

    return temp;
};
