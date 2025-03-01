/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
     const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    const result = [];
    let zeros = 0;
    for (const num of nums) {
        if (num !== 0) {
            result.push(num);
        } else {
            zeros++;
        }
    }

    for (let i = 0; i < zeros; i++) {
        result.push(0);
    }

    return result;
};