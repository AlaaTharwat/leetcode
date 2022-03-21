/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end)/2);

        if(target == nums[mid]) {
            return mid;
        }

        if(nums[start] <= nums[mid]) { // left array is sorted
            if(target >= nums[start] && target < nums[mid]) { // target lies between start and mid index
                end = mid-1;
            } else {
                start = mid+1;
            }
        } else { // right array is sorted
            if(target > nums[mid] && target <= nums[end]) { // target lies between mid and end index
                start = mid+1;
            } else {
                end = mid-1;
            }
        }
    }

    return -1;
};
// @lc code=end

