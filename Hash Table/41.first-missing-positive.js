/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let map = {};
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] < 0) nums[i] = 0;
    // }

    for(let i = 0; i < nums.length; i++){
        if(!map[nums[i]]){
            if(nums[i] > 0)  map [nums[i]] = true
        }
    }

    if(!map[0]) map[0] = true


    for(let i = 0; i< Object.keys(map).length; i++){
        if(!map[i]) return i
    }


    return Object.keys(map).length
    // for(l)
 
};
// @lc code=end

