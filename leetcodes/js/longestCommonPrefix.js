const worstCase = (strs) => {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    const mappedStrings = strs
        .map((string, index) => {
            const nextIndex = index + 1;
            if (nextIndex >= strs.length) return null;

            const currentString = string.split("");
            const nextString = strs[nextIndex].split("");

            const prefixes = [];
            let i = 0;
            while (currentString[i] === nextString[i]) {
                prefixes.push(currentString[i]);

                if (currentString.length === i - 1 || nextString.length === i - 1) break;

                i += 1;
            }

            return prefixes.join("");
        })
        .filter((item) => item !== null);

    return worstCase(mappedStrings);
}

const avarageCase = (strs) => {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    let prefix = "";

    for (let i = 0; i < strs.length - 1; i++) {
        const currentString = strs[i];
        const nextString = strs[i + 1];

        if (currentString[0] !== nextString[0]) return "";

        let newPrefix = "";
        for (let j = 0; j < currentString.length || j < nextString.length; j++) {
            if (currentString[j] === nextString[j]) {
                newPrefix = newPrefix + currentString[j];
            } else {
                break;
            }
        }

        if (prefix === "" || newPrefix.length < prefix.length) prefix = newPrefix
    }

    return prefix;
}

const bestCase = (strs) => {
    if (strs.length === 0) return "";

    strs.sort();

    const firstWord = strs[0];
    const lastWord = strs[strs.length -1];

    for (let i = 0; i < firstWord.length; i++) {
        if (firstWord[i] !== lastWord[i]) return firstWord.substr(0, i);
    }

    return firstWord;
}
