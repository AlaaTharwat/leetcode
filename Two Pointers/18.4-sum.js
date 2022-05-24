/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    const sortedNums = nums.sort((a, b) => a - b);
    for (let i = 0; i < sortedNums.length - 3; i += 1) {
        for (let j = i + 1; j < sortedNums.length - 2; j += 1) {
            let left = j + 1; // start after our two loop indexes
            let right = nums.length - 1;
            
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (nums[left] === nums[left + 1]) left += 1; 			// avoid dupes
                    while (nums[right] === nums[right - 1]) right -= 1;			// avoid dupes
                    left += 1;
                    right -= 1;
                } else if (sum > target) {
                    right -= 1
                } else {
                    left += 1;
                }
            }
            while(nums[j] === nums[j + 1]) j++;
        }
        while(nums[i] === nums[i + 1]) i++;
    }
    return result
};
// @lc code=end

