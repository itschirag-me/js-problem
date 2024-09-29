/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const mergedArray = [];
    const n1 = nums1.length;
    const n2 = nums2.length;

    const middlePosition = Math.floor((n1 + n2) / 2);

    let n = 0;
    let m = 0;

    for (let i = 0; i < (n1 + n2); i++) {
        if (nums2[m] === undefined || nums1[n] < nums2[m]) {
            mergedArray.push(nums1[n]);
            n++;
        } else {
            mergedArray.push(nums2[m]);
            m++;
        }
    }

    if (mergedArray.length % 2 === 0) {
        return (mergedArray[middlePosition] + mergedArray[middlePosition - 1]) / 2
    } else {
        return mergedArray[middlePosition]
    }
};

module.exports = findMedianSortedArrays;