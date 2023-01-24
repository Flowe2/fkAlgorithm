/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 模拟构造, 压缩矩阵空间, 与Official Method 2同理
let convert = function (s, numRows) {
    let res = ''
    if (numRows == 1) {
        return s;
    }
    s = Array.from(s);
    let temp = [];
    for (let i = 0; i < numRows; i++) {
        temp[i] = [];
    }
    let index = 0;
    // default 正向, 向下
    let dirc = 1;
    for (let j = 0; j < s.length; j++) {
        if (index == 0) {
            temp[index].push(s[j]);
            dirc = 1;
        } else if ((index + 1) == numRows) {
            temp[index].push(s[j]);
            dirc = -1;
        } else {
            temp[index].push(s[j]);
        }
        index += dirc;
    }
    for (let arr of temp) {
        res += arr.join('');
    }
    return res;
};

// Official 3, 直接构造
let convert2 = function(s, numRows) {
    const n = s.length, r = numRows;
    if (r === 1 || r >= n) {
        return s;
    }
    const t = r * 2 - 2;
    const ans = [];
    for (let i = 0; i < r; i++) { // 枚举矩阵的行
        for (let j = 0; j < n - i; j += t) { // 枚举每个周期的起始下标
            ans.push(s[j + i]); // 当前周期的第一个字符
            if (0 < i && i < r - 1 && j + t - i < n) {
                ans.push(s[j + t - i]); // 当前周期的第二个字符
            }
        }
    }
    return ans.join('');
};

// test
let s = "PAYPALISHIRING";
console.log(convert(s, 3));