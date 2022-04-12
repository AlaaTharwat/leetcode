/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0, right = nums.length - 1, leftIdx = -1, rightIdx = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            leftIdx = mid;
            right = mid - 1;
        } else if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }

    right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            rightIdx = mid;
            left = mid + 1;
        } else if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }

    return [leftIdx, rightIdx];
};
// @lc code=end

