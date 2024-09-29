/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const temp = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (temp.has(target - nums[i])) {
            return [temp.get(target - nums[i]), i];
        }
        temp.set(nums[i], i);
    }
};

module.exports = twoSum;