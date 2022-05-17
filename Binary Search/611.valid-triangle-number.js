/*
 * @lc app=leetcode id=611 lang=javascript
 *
 * [611] Valid Triangle Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    //binary search => 
    nums.sort((a,b)=> a-b);
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            let l = j + 1; 
            let r = nums.length - 1; 
            while (l <= r) {
                let mid = Math.floor(l + (r - l) / 2);
                if (nums[mid] < nums[i] + nums[j]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            count += l - j - 1;
        }
    }
    return count;

};
// @lc code=end

