const worstCase = (nums1, nums2) => {
    // merge arrays
    const mergedArr = [...nums1, ...nums2];

    // sort merged array
    mergedArr.sort((a,b) => a - b);

    // check if there is a median
    const thereIsMedian = !!(mergedArr.length % 2);
    if (thereIsMedian) return mergedArr[Math.floor(mergedArr.length / 2)];

    // calc the median number if there is no a median
    const sumMedian = mergedArr[mergedArr.length / 2] + mergedArr[(mergedArr.length / 2) - 1];

    return sumMedian / 2;
};

const avarageCase = (nums1, nums2) => {
    // merge and keep arrays sorted
    const mergedArr = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            mergedArr.push(nums1[i]);
            i++;
        } else {
            mergedArr.push(nums2[j]);
            j++;
        }
    }

    // add the rest of the arrays
    while (i < nums1.length) {
        mergedArr.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        mergedArr.push(nums2[j]);
        j++;
    }

    // check if there is a median
    const thereIsMedian = !!(mergedArr.length % 2);
    if (thereIsMedian) return mergedArr[Math.floor(mergedArr.length / 2)];

    // calc the median number if there is no a median
    const sumMedian = mergedArr[mergedArr.length / 2] + mergedArr[(mergedArr.length / 2) - 1];

    return sumMedian / 2;
};
