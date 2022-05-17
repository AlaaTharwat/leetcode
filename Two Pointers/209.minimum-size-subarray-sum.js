/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    //Two pointers
    let ans = Infinity, i = 0, j = 0, sum = 0;
    
    while (j < nums.length) {
        sum += nums[j++];
        
        while (sum - nums[i] >= s && i < j) { sum -= nums[i++]; }
        
        if (sum >= s) {
            ans = Math.min(ans, j - i);
        }
    }
    
    return ans === Infinity ? 0 : ans;
};


// @lc code=end

