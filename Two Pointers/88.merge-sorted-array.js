/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let size = m + n - 1;
    let i = m - 1;
    let j = n - 1;

    while (size >= 0) {
        if (j >= 0 && i >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[size--] = nums1[i--];
            } else {
                nums1[size--] = nums2[j--];
            }
        } else if (i >= 0) { // arr2 is completed now fill values from arr1
            nums1[size--] = nums1[i--];
        } else { // arr1 is completed now fill values from arr2
            nums1[size--] = nums2[j--];
        }
    }
};
// @lc code=end

