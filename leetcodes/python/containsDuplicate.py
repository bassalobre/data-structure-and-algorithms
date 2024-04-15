def containsDuplicate(nums):
    visited = {}

    for num in nums:
        if num in visited:
            return True
        else:
            visited[num] = 1

    return False
