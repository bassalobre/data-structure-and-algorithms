def worstCase(s):
    output = []

    if len(s) == 0: return [[]]

    for i in range(1, len(s) + 1):
        sub_str = s[:i]

        if sub_str != sub_str[::-1]: continue

        rest_str = s[i:]
        rest = worstCase(rest_str)

        for j in range(len(rest)):
            output.append([sub_str] + rest[j])
    
    return output

def avarageCase(s):
    def is_palindrome(sub): return sub == sub[::-1]

    def backtrack(start, path):
        if start == len(s):
            partitions.append(path[:])
            return
        
        for end in range(start + 1, len(s) + 1):
            sub_str = s[start:end]
            
            if is_palindrome(sub_str):
                path.append(sub_str)
                backtrack(end, path)
                path.pop()

    partitions = []
    backtrack(0, [])
    
    return partitions
