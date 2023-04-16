/**
 * @param {number[]} nums
 * @return {number}
 */
// 经典的动态规划问题
let maxSubArray = function (nums) {
    // 思路需要倒着来
    // 以nums[i]开头的最大和的子数组, 存在后效性
    // 以nums[i]结尾的最大和的子数组, 无后效性 ✓
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};