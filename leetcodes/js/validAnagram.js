const worstCase = (s, t) => {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s === t;
};

const bestCase = (s, t) => {
    if (s.length !== t.length) return false;

    const count = {};

    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
    }

    for (let i = 0; i < t.length; i++) {
        count[t[i]] = (count[t[i]] || 0) - 1;
    }

    for (const n in count) {
        if (count[n] !== 0) return false;
    }

    return true;
};
