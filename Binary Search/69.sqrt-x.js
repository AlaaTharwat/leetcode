/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 1
    let high = x
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
       const guess =  mid*mid;
    //    console.log(mid)
        if (guess === x) {
            return mid
        }
        if (guess > x) {
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return high //if not found
};
// @lc code=end

