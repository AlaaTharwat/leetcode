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
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while(numbers[start] + numbers[end] !== target){
        if(numbers[start] + numbers[end] > target){
            end --;
        }else start ++;
    }

    return [start + 1, end + 1]
};
// @lc code=end

