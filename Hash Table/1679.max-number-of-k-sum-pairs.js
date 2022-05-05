/*
 * @lc app=leetcode id=1679 lang=javascript
 *
 * [1679] Max Number of K-Sum Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {

    //using hashmap
    // let map = {};
    // let count = 0;
    // for(let i = 0; i< nums.length; i++){
    //     let target = k - nums[i];
    //     if(map[target] || map[target] > 0){
    //         count++;
    //         map[target]--;
    //       //  console.log(mm)
    //        // if(map[target] == 0) map[target] = undefined
    //       //  console.log(map)
    //     }else{
    //         if(map[nums[i]]) map[nums[i]]++; 
    //         else map[nums[i]] = 1;
    //     }
    // }
    // return count

    //using 2-pointers

    let i = 0;
    let j = nums.length - 1;
    let count = 0;
    nums.sort((a,b)=> a - b)
    while(i < j){
        if(nums[i] + nums [j] > k){
            j--;
        }else if (nums[i] + nums [j] < k){
            i++;
        }else {
            count ++;
            j--;
            i++;
        }
    }
    return count
};
// @lc code=end

