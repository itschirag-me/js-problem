const findMedianSortedArrays = require('.');

describe('4. Median of Two Sorted Arrays (HARD)', () => {
    test('findMedianSortedArrays handles empty nums1 and nums2', () => {
        const nums1 = [];
        const nums2 = [1];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(1);  // The only element in nums2 is the median
    });

    test('findMedianSortedArrays handles single element arrays', () => {
        const nums1 = [1000000];
        const nums2 = [1000000];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(1000000);  // Both arrays have one identical element
    });

    test('findMedianSortedArrays handles large numbers', () => {
        const nums1 = [Number.MIN_SAFE_INTEGER];
        const nums2 = [Number.MAX_SAFE_INTEGER];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(0);  // The median should be 0, as both extreme numbers are balanced
    });

    test('findMedianSortedArrays handles all zeros in both arrays', () => {
        const nums1 = [0, 0, 0];
        const nums2 = [0, 0, 0];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toBe(0);  // Median should be 0 since all elements are 0
    });
});
