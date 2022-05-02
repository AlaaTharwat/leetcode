/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//binary search
var twoSum = function(numbers, target) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let toSearch = target - nums[i];
        let idx = binSearch(nums, i + 1, nums.length, toSearch);
        if (idx > -1) {
            res = [i + 1, idx + 1];
            break;
        }
    }
    
    return res;
    
};

function binSearch(nums, l, r, num) {
    if (r > l) {
        let mid = Math.floor((l + (r - 1)) /2);
        if (nums[mid] === num) {
            return mid;
        }
        
        if (num < nums[mid]) {
            return binSearch(nums, l, mid, num);
        } else {
            return binSearch(nums, mid + 1, r, num);
        }
    } else {
        return -1;
    }
}
// @lc code=end

