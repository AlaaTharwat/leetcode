/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let current = 0;
    let next_element = current + 1;
    let total = 0
    nums.sort((a, b) => a - b);

    while (current < next_element && current < nums.length - 1) {
        total += nums[current]
        current = next_element + 1
        next_element = current + 1
    }

    return total
};
// @lc code=end

