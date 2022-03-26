/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == "") { return 0 }
    let i = 0, s = 0;
    while(i < haystack.length - needle.length + 1){
        if(haystack[i+s] != needle[s]){
            i++;
            s=0;
        }else{
            s++;
            if(s == needle.length) return i
        }
    }

        return -1
};
// @lc code=end

