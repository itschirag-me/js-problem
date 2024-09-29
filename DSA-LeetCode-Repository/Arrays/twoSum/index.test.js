const twoSum = require('.');

describe('1. Two Sum (EASY)', () => {
    test('should return [0, 1] when nums = [2, 7, 11, 15] and target = 9', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });

    test('should return [1, 3] when nums = [5, -2, 3, -1] and target = -3', () => {
        const nums = [5, -2, 3, -1];
        const target = -3;
        const result = twoSum(nums, target);
        expect(result).toEqual([1, 3]);
    });

    test('should return [0, 2] when nums = [-1, 2, -3, 4] and target = -4', () => {
        const nums = [-1, 2, -3, 4];
        const target = -4;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 2]);
    });
});
