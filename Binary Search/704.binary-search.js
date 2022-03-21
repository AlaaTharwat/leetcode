/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(list, item) {
    let low = 0
   let high = list.length - 1

  while (low <= high) {
    // Prevent (left + right) overflow
    // let mid = left + (right - left) / 2;
    const mid = Math.floor((low + high) / 2)
    const guess = list[mid]

    if (guess === item) {
      return mid
    }

    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1 //if not found
};
// @lc code=end

