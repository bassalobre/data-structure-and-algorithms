def merge(nums1, m, nums2, n):
    if n == 0: return

    for i in range(m, m + n):
        nums1[i] = nums2.pop(0)

    nums1.sort()
