/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let [l, h] = [1, n];
    while(l <= h) {
        const mid = l + Math.trunc((h-l)/2);
        const res = guess(mid);
        if(res === 0) {
            return mid;
        }
        if (res < 0) {
            h = mid - 1;
            
        } else {
            l = mid + 1;
        }
    }
    return -1;
};
// @lc code=end

