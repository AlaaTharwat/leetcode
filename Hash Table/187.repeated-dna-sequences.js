/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let set = new Set();
    let result = new Set();

    for(let i = 0; i<= s.length - 10; i++){
        let str = s.substring(i, i + 10);
        set.has(str) ? result.add(str) : set.add(str);
    }
    // console.log(result)
    return [...result]
};
// @lc code=end

