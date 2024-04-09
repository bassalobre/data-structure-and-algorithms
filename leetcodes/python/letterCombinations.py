def letterConbinations(digits):
    if len(digits) < 1: return []
    
    hash_map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }

    output = []
    def backtracking(curr, i):
        if len(curr) == len(digits):
            output.append(curr)
            return

        for digit in hash_map[digits[i]]:
            backtracking(curr + digit, i + 1)

    backtracking("", 0)

    return output
