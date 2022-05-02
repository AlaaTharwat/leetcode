/*
 * @lc app=leetcode id=1855 lang=javascript
 *
 * [1855] Maximum Distance Between a Pair of Values
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    let distance = 0;
    nums1.forEach((num, i) => {
       
        let foundIndex = binarySearch(nums2, num);
        console.log(foundIndex)
        distance = Math.max(foundIndex-i, distance)
    })

    return distance
};

const binarySearch = (nums, target) => {
    var low = 0
    var high = nums.length - 1;
    var index = 0

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (target <= nums[mid]) {
            index = mid
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return index
}
// @lc code=end

