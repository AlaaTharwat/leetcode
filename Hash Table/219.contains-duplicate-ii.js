/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {};

    for(let i = 0; i < nums.length ; i++){
        if(map[nums[i]] || map[nums[i]] == 0){
           if(i - map[nums[i]] <= k) return true
           else{
            map[nums[i]] = i
           }
        }else {
            map[nums[i]] = i
            // console.log(map)
        }
    }

    return false
};
// @lc code=end

