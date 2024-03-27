const worstCase = (x) => {
    const reverse = x.toString().split('').reverse().join('');
    return reverse === x.toString();
}

const avarageCase = (x) => {
    if (x === 0) return true;
    if (x < 0 || (x % 10) === 0) return false;

    const stack = [];
    let number = x;

    while (number !== 0) {
        let rest = Math.floor(number % 10);
        stack.push(rest);

        number = Math.floor(number / 10);
    }

    return x === Number(stack.join(''));
}

const bestCase = (x) => {
    if (x === 0) return true;
    if (x < 0 || (x % 10) === 0) return false;

    let number = x;
    let inverse = 0;

    while (number !== 0) {
        const rest = Math.floor(number % 10);

        number = Math.floor(number / 10);
        inverse = Math.floor(inverse * 10 + rest);
    }

    return x === inverse;
}
