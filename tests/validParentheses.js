const validChars = {
    "(": { isOpen: true, isClose: false, before: null, next: ")" },
    ")": { isOpen: false, isClose: true, before: "(", next: null },
    "[": { isOpen: true, isClose: false, before: null, next: "]" },
    "]": { isOpen: false, isClose: true, before: "[", next: null },
    "{": { isOpen: true, isClose: false, before: null, next: "}" },
    "}": { isOpen: false, isClose: true, before: "{", next: null }
};
const pairChars = {
    "(": ")",
    "[": "]",
    "{": "}",
};

const worstCase = (s) => {
    if (s.length <= 1) return false;

    const recursiveValidation = (s, i = 0, isValidString = false, stack = []) => {
        if (s.length === i) return isValidString;

        while (validChars[s[i]] && validChars[s[i]].isOpen) {
            if (!s[i + 1]) return false;

            stack.push(s[i]);
            i++;
        }

        while (validChars[s[i]] && validChars[s[i]].isClose) {
            isValidString = validChars[s[i]].before === stack.pop();
            
            if (!isValidString) return false;
            
            i++;
        }

        if (stack.length > 0 && !s[i]) return false;

        return recursiveValidation(s, i, isValidString, stack);
    };
    
    return recursiveValidation(s);
}

const avarageCase = (s) => {
    if (s.length <= 1) return false;
    if (validChars[s[0]].isClose) return false;

    const stack = [];
    let isValidString = false;
    for (let i = 0; i < s.length; i++) {
        const current = validChars[s[i]];

        if (stack.length === 0 && current.isClose) return false;

        if (current.isOpen) {
            if (!s[i + 1]) return false;

            stack.push(s[i]);
            continue;
        }

        if (current.isClose) {
            isValidString = validChars[s[i]].before === stack.pop();

            if (!isValidString) return false;
            continue;
        }
    }

    if (stack.length > 0) return false;

    return isValidString;
}

const bestCase = (s) => {
    if (s.length <= 1) return false;

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const pair = pairChars[char];

        if (pair) {
            stack.push(pair);
            continue;
        }
        
        if (char !== stack.pop()) return false;
    }

    return stack.length === 0;
}
