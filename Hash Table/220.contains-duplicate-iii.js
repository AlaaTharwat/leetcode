/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let map = {};

    for(let i = 0; i < nums.length ; i++){
        if(map[nums[i]] || map[nums[i]] == 0){
            let val = Math.abs(nums[i] - nums[map[nums[i]]]);
            console.log(val)
           if(i - map[nums[i]] <= k && val <= t) return true
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

