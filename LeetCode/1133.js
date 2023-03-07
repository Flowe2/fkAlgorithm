/**
 * @param {number[]} nums
 * @return {number}
 */
let largestUniqueNumber = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    let res = -1;
    let dic = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (dic.has(nums[i])) {
            dic.set(nums[i], dic.get(nums[i])+1);
        } else {
            dic.set(nums[i], 1);
        }
    }
    dic.forEach((val, key) => {
        if (val == 1 && key > res) {
            res = key;
        }
    })
    return res;
};

// test
let nums = [5,7,3,9,4,9,8,3,1];
console.log(largestUniqueNumber(nums));