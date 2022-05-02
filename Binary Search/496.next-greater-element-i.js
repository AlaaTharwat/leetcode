/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let l = 0
    let r = letters.length - 1
    
    if (target < letters[l] || target >= letters[r]) {
        return letters[0]
    }
    
    while (l < r) {
        const mid = Math.floor(l + (r - l) / 2)
        if (target < letters[mid]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    
    return letters[l]
};
// @lc code=end

