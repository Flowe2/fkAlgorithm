/**
 * @param {string} s
 * @return {number}
 */

// 正则
let myAtoi = function (s) {
    let res = s.trimStart().match(/^[-+]?\d+/);
    if (res == null) {
        return 0;
    }
    if (res[0] > (Math.pow(2, 31) - 1)) {
        return Math.pow(2, 31) - 1
    }
    if (res[0] < Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    }

    return res[0]
};

// 优先自动状态机
let myAtoi2 = function (s) {

};

// test
// let s = "4193 with words";
// console.log(myAtoi(s));