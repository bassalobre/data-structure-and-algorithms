const avarageCase = (s) => {
    const chars = {};

    for (let i = 0; i < s.length; i++) {
        chars[s[i]] = chars[s[i]] ? chars[s[i]] + 1 : 1;
    }

    for (const char in chars) {
        if (chars[char] === 1) {
            return s.indexOf(char);
        }
    }

    return -1;
};

const bestCase = (s) => {
    const chars = new Map();

    for (const char of s) {
        chars.set(char, (chars.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (chars.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};
