/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0
  let high = list.length - 1

while (low <= high) {
  // Prevent (left + right) overflow
  // let mid = left + (right - left) / 2;
  const mid = Math.floor((low + high) / 2)

  if (nums[mid] === target) {
    return mid
  }

  if (nums[mid] > target) {
    high = mid - 1
  } else {
    low = mid + 1
  }
}

return low //if not found
};
// @lc code=end

