/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(choices, temp = [], permutations = [], map = {}) {
    if(choices.length === 0 && !map[temp]){
        permutations.push([...temp]);
        map[temp] = true;
      } 
  
      for(let i = 0; i < choices.length; i++){
          let newChoices = choices.filter((choice, index) => index !== i)
          temp.push(choices[i])
          permute(newChoices, temp, permutations, map)
          temp.pop()
      }
      
      return permutations
};
// @lc code=end

