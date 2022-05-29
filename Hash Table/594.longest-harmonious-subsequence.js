/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = {}
    let res = 0;
    for(let i = 0; i<nums.length ;i++){
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
        if(map[nums[i] - 1])res = Math.max(res, map[nums[i]] + map[nums[i]-1]);
        if(map[nums[i] + 1]) res =Math.max(res, map[nums[i]] + map[nums[i]+1]);
    }
    return res
};
// @lc code=end

