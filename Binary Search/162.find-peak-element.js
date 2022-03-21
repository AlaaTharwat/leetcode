/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while(low < high){
       // let mid = low + (high - low / 2);
        let mid = Math.floor((low + high)/2);
        console.log(mid)
        if(nums[mid] > nums[mid + 1]){
            high = mid;
        }else if(nums[mid] <= nums[mid + 1]) low = mid + 1;
    }

    return low
};
// @lc code=end

