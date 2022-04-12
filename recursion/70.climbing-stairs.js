/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
    if(memo[n]) return memo[n]
    if (n < 2) return 1;
     memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
    
    return memo[n]
        
};
// @lc code=end

