/*
 * @lc app=leetcode id=1351 lang=javascript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++)
    {
        const index = binarySearch(grid[i])
        count+= grid[i].length - index;
    }
    return count;
};

const binarySearch = (nums) => {
    var low = 0
    var high = nums.length - 1;
    var sum = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
       // console.log(nums[mid])
        if (nums[mid] < 0) {
         //   sum++;
          
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    console.log(low)
    return low;
}
// @lc code=end

