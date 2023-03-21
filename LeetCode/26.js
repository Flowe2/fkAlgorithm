/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    let k = 0;
    for(let i=1; i<nums.length;i++){
        if (nums[i]!=nums[k]){
            nums[++k] = nums[i];
        }
    }
    nums = nums.slice(0, k+1);
    // k本为index, 要求返回数组长
    return k+1;
};

// test
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));