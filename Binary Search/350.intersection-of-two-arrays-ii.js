/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b)=>{return a-b;});
    nums2.sort((a,b)=>{return a-b;});
    var i = 0, j = 0, ret = [];
    while(j<nums2.length&&i<nums1.length){
        if(nums1[i]==nums2[j]){
          //  if(ret[ret.length-1]!=nums1[i]){
                ret.push(nums1[i]);
          //  }
            i++;
            j++;
        }
        else if(nums1[i]<nums2[j]){
            i++;
        }
        else {
            j++;
        }
    }
    return ret;
};
// @lc code=end

