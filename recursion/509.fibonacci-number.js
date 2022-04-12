/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo = {}) {

    //USING MEMORIZATION
    if(memo[n]) return memo[n]
    if(n == 0) return 0
    if (n <= 2) return 1;
     memo[n] = fib(n-1, memo) + fib(n-2, memo)
    
    return memo[n]
    
};
// @lc code=end

