var subarraySum = function (nums) {
    let map = {};
    let sum = 0;
    let res = [];

    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        sum += num;
        if(map[sum]){
            res.push([map[sum] + 1, i]);
        }else{
            map[sum] = i
        }
    }

    return res
}

var countSubarraySum = function (nums, k) {
    var sum = 0;
    var occuranceCount = 0;
    const map = new Map();
    map.set(0, 1);
    for (var num of nums) {
        sum += num;
        if (map.has(sum)) {
            occuranceCount += map.get(sum);
        }
        map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
    }

    return occuranceCount
}

console.log(countSubarraySum([5, 1, 3, -3, 7, -4]));
