/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // var globalClosest = int.MaxValue;
    // var globalSum = 0;

    let output = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                output.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) left++;
            else right--;
        }
    }
    return output
};
// @lc code=end

