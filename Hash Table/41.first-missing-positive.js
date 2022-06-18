/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

    //put numbers into map and check if i doesn't exist
    let max = 0;
    let map = {};
    
    for(let i = 0; i< nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }else{
            map[nums[i]]++;
        }
        if(nums[i] > max) max = nums[i]
    }
    
    for(let i = 1; i <= max+1;i ++){
        if(!map[i]) return i
        if(map[i] > 1)  console.log("repeated", i) 
    }



 
};
// @lc code=end

