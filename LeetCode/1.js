/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return []
};


// test
// ----------------------
// nums = [2, 7, 11, 15];
// tartget = 9;
// console.log(nums);
// console.log(target);
// if (res = test(nums, tartget) == [0, 1]){
//     console.log("success");
// } else {
//     console.log("fail");
// }