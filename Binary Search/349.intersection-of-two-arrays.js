/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//With binary search
var intersection = function(nums1, nums2) {
    nums1.sort((a,b)=>{return a-b;});
    nums2.sort((a,b)=>{return a-b;});
    var i = 0, j = 0, ret = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            if(ret[ret.length-1]!=nums1[i]){
                ret.push(nums1[i]);
            }
            i++;
            j++;
        }else if(nums1[i] < nums2[j]) {
            i++;
        }else j++
    }

    return ret
};
// @lc code=end

