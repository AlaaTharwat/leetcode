/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }
    let start = 0;
    let end = 0;
    let map = {};
    let maxLen= 0;

    while(end < s.length){
        if(map[s[end]] == undefined || !map[s[end]]){
            map[s[end]] = true;
            end++;
            maxLen = Math.max(maxLen, end - start)
        }else{
            map[s[start]] = false
            start++;
        }
    }
    return maxLen
};
// @lc code=end

