/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const swap = (l,r) => {
        if(l >= r) return
        [s[l],s[r]] = [s[r], s[l]];
        // console.log(s)
        swap(l+1, r-1)
    }
    swap(0, s.length - 1)
};
// @lc code=end

