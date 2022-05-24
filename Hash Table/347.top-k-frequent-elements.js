/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    //hashmap
    let map = {};

    for(let i = 0; i < nums.length ;i++){
        if(map[nums[i]]) map[nums[i]]++;
        else map[nums[i]] = 1;
    }

    let res = [];
    for(let i = 0; i< nums.length ; i++){
        if(map[nums[i]] == k){
            res.push(nums[i]);
            map[nums[i]]--;
        }
    }
    return  Object.keys(map).sort((a, b) => map[b] - map[a]).slice(0, k);
   
};
// @lc code=end

