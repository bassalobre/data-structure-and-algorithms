const symbols = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
};
const subtractSymbols = {
    I: new Set(['V', 'X']),
    X: new Set(['L', 'C']),
    C: new Set(['D', 'M']),
};

const worstCase = (s) => {
    const splitedSymbols = s.split('');
    const discartedSymbols = [];
    const mappedSymbols = splitedSymbols
        .map((symbol, index) => {
            const subtracted = subtractSymbols[symbol] || null;
            const nextIndex = index + 1

            if (nextIndex >= splitedSymbols.length) return symbol
            
            const nextSymbol = splitedSymbols[nextIndex];
            if (subtracted && subtracted.has(nextSymbol)) {
                discartedSymbols.push(nextIndex);
                return symbol + nextSymbol;
            }

            return symbol;
        })
        .filter((_, index) => !discartedSymbols.includes(index));

    return mappedSymbols
        .map(symbol => symbols[symbol])
        .reduce((sum, number) => sum + number, 0);
}

const avarageCase = (s) => {
    const splitedSymbols = s.split('');
    const mappedSymbols = [];

    for (let index = 0; index < splitedSymbols.length; index++) {
        const symbol = splitedSymbols[index];
        const subtracted = subtractSymbols[symbol] || null;
        const nextIndex = index + 1

        if (nextIndex >= splitedSymbols.length) {
            mappedSymbols.push(symbol);
            continue;
        }

        const nextSymbol = splitedSymbols[nextIndex];
        if (subtracted && subtracted.has(nextSymbol)) {
            mappedSymbols.push(symbol + nextSymbol);
            index++;
            continue;
        }

        mappedSymbols.push(symbol);
    }

    let sum = 0;
    for (let index = 0; index < mappedSymbols.length; index++) {
        const symbol = mappedSymbols[index];
        sum += symbols[symbol];
    }

    return sum;
}

const bestCase = (s) => {
    let sum = 0;

    for (let index = 0; index < s.length; index++) {
        const symbol = s[index];
        const subtracted = subtractSymbols[symbol] || null;
        const nextIndex = index + 1

        if (nextIndex >= s.length) {
            sum += symbols[symbol];
            continue;
        }

        const nextSymbol = s[nextIndex];
        if (subtracted && subtracted.has(nextSymbol)) {
            sum += symbols[symbol + nextSymbol];
            index++;
            continue;
        }

        sum += symbols[symbol];
    }

    return sum;
}
