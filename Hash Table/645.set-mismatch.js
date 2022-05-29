/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let map = {};
    let dup = 0, loss = 0;
    let res = [];
    for(let i = 0; i < nums.length; i++){
       map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
    }

    for(let i = 1; i <= nums.length; i++){
        if(map[i] == 2) dup = i
        if(map[i] == 0 || !map[i]) loss = i
    }
    res = [dup, loss]
    return res
};
// @lc code=end

