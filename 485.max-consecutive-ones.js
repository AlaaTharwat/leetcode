/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let sum = 0;
    let maxSum = 0;

    for(let i = 0 ;i < nums.length; i++){
        if(nums[i] == 1) sum++;
        else sum = 0

        if(maxSum < sum) maxSum = sum
    }

    return maxSum
};
// @lc code=end

