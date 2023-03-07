// 官方题解
// 差分法
// 利用差分数组
/*
var corpFlightBookings = function(bookings, n) {
    const nums = new Array(n).fill(0);
    for (const booking of bookings) {
        nums[booking[0] - 1] += booking[2];
        if (booking[1] < n) {
            nums[booking[1]] -= booking[2];
        }
    }
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};
*/

// my solution: BF
var corpFlightBookings = function (bookings, n) {
    let res = new Array(n).fill(0);
    bookings.forEach(val => {
        let n = val[1] - val[0];
        if (n == 0) {
            res[(val[0] - 1)] += val[2];
        } else {
            for (let i = val[0] - 1; i < val[1]; i++) {
                res[i] += val[2];
            }
        }
    })
    return res;
};