/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(H) {
    let ans = 0, i = 0, j = H.length-1, res = 0;
    while (i < j) {
        if (H[i] <= H[j]) {
            res = H[i] * (j - i);
            i++;
        } else {
            res = H[j] * (j - i);
            j--;
        }
        if (res > ans) ans = res;
    }
    return ans;
};
// @lc code=end

