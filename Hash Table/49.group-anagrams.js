/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    
    for(let i = 0;i < strs.length; i++){
        let letters = strs[i].split('').sort();
        map[letters] ? map[letters].push(strs[i]) : map[letters] = [strs[i]]
    }
    const keys = Object.keys(map);
    const values = keys.map(function(v) { return map[v]; });

    return values
};
// @lc code=end

