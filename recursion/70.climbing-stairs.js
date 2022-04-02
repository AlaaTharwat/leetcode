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
var climbStairs = function(n) {
    if (n < 4) return n;
    return (climbStairs(n - 1) + climbStairs(n -2));

        
//      let cache = {};
    
//     let howManyWays = function(n) {
//         if (n in cache) {
//             return cache[n];
//         }

//         if (n < 4) {
//             cache[n] = n;
//             return cache[n];
//         }
        
//         cache[n] = (howManyWays(n - 1) + howManyWays(n - 2));
//         return cache[n];
//     }
    
//     return howManyWays(n);
};
// @lc code=end

