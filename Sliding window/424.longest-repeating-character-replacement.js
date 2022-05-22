/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
   //Sliding windiw => 
   let left = 0
   let right = 0
   let maxCharCount = 0
   const visited = {}
 
   while (right < s.length) {
     visited[s[right]] = visited[s[right]] ? visited[s[right]] + 1 : 1
 
     if (visited[s[right]] > maxCharCount) maxCharCount = visited[s[right]]
 
     if (right - left + 1 - maxCharCount > k) {
       visited[s[left]]--
       left++
     }
 
     right++
   }
 
   return right - left
};
// @lc code=end

