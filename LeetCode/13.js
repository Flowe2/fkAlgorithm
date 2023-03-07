/**
 * @param {string} s
 * @return {number}
 */

// if-else 嗯来
let romanToInt = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'M') {
            res += 1000;
        } else if (s[i] == 'C' && s[i + 1] == 'M') {
            res += 900;
            // 此类i需多跳一次
            i++;
        } else if (s[i] == 'D') {
            res += 500;
        } else if (s[i] == 'C' && s[i + 1] == 'D') {
            res += 400;
            i++;
        } else if (s[i] == 'C') {
            res += 100;
        } else if (s[i] == 'X' && s[i+1] == 'C') {
            res += 90;
            i++;
        } else if (s[i] == 'L') {
            res += 50;
        } else if (s[i] == 'X' && s[i+1] == 'L') {
            res += 40;
            i++;
        } else if (s[i] == 'X') {
            res += 10;
        } else if (s[i] == 'I' && s[i+1] == 'X') {
            res += 9;
            i++;
        } else if (s[i] == 'V') {
            res += 5;
        } else if (s[i] == 'I' && s[i+1] == 'V') {
            res += 4;
            i++;
        } else {
            res += 1;
        }
    }
    return res;
};

// #Offical 模拟
let romanToInt2 = function(s) {
    // 使用map key-value预存罗马数字对应值
    const symbolValues = new Map();
    symbolValues.set('I', 1);
    symbolValues.set('V', 5);
    symbolValues.set('X', 10);
    symbolValues.set('L', 50);
    symbolValues.set('C', 100);
    symbolValues.set('D', 500);
    symbolValues.set('M', 1000);  
    let ans = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        const value = symbolValues.get(s[i]);
        // 若后一字符值小于当前, 则减去
        if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
            ans -= value;
        } else {
            ans += value;
        }
    }
    return ans;
};

// test
// let s = "III"
// console.log(romanToInt(s));