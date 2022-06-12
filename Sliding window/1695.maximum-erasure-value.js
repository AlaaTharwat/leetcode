/*
 * @lc app=leetcode id=1695 lang=javascript
 *
 * [1695] Maximum Erasure Value
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let l = 0 , tot = 0 , ans = -1, r = 0;
    const map = {};
    while(r < nums.length){
        while(l <= r && map[nums[r]]){
           tot -= nums[l]
            map[nums[l++]] = false;
        }
        map[nums[r]] = true;
        tot += nums[r++];
        ans = Math.max(ans,tot)
    }
    return ans
};
// @lc code=end

