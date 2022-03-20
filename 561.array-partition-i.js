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
    nums.sort((a,b)=> a-b);
    console.log(nums)
        let result = 0;
        for (let i = 0; i < nums.length; i += 2) {
            result += nums[i];
        }
        return result;
};
// @lc code=end

