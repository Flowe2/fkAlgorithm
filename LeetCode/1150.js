/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
let isMajorityElement = function (nums, target) {
    let count = 0;
    const level = (nums.length / 2).toFixed(1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            count++;
        }
        // 提前中断
        if (count > level) {
            return true;
        }
    }
    if (count > level) {
        return true;
    } else {
        return false;
    }
};

// test
let nums = [2,4,5,5,5,5,5,6,6], target = 5;
console.log(isMajorityElement(nums, target));