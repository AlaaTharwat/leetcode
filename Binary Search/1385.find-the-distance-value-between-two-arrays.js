/*
 * @lc app=leetcode id=1385 lang=javascript
 *
 * [1385] Find the Distance Value Between Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    arr2.sort((a, b) => a - b); // plug in your nlogn sorting algo here
    return arr1.filter(x => isValid(x,arr2,d)).length
};

const isValid = (num, arr, d) => {
    let low = 0,high = arr.length-1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        let diff = Math.abs(num - arr[mid]);
        if(diff <= d) return false;
        // else if(diff >= d) return true
        else if(arr[mid] > num){
            high = mid-1
        }else  low = mid+1
    }
    return true
}
// @lc code=end

