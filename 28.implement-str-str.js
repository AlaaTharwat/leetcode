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
var strStr = function(haystack, needle) {
    let index = 0
    let sum = 0;
    
    if(needle == "") {return 0}
    
    
    for(let i = 0; i<(haystack.length - needle.length) + 1; i++){
        
       for (let j = 0; j < needle.length; j ++ ) {
                if (haystack[i+j] != needle[j]){
                    break;
                }
                if (j == needle.length -1) {
                    return i;
                }
            }
        
        
    }
    
    return -1
};
// @lc code=end

