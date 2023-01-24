/**
 * @param {number} num
 * @return {string}
 */
// if-else 嗯来
let intToRoman = function (num) {
    let res = '';
    while (num > 0) {
        // 注意判断条件应该包含零界点, 即 >= 
        if (num >= 1000) {
            num -= 1000;
            res += 'M';
        } else if (num >= 900) {
            num -= 900;
            res += 'CM';
        } else if (num >= 500) {
            num -= 500;
            res += 'D';
        } else if (num >= 400) {
            num -= 400;
            res += 'CD';
        } else if (num >= 100) {
            num -= 100;
            res += 'C';
        } else if (num >= 90) {
            num -= 90;
            res += 'XC';
        } else if (num >= 50) {
            num -= 50;
            res += 'L';
        } else if (num >= 40) {
            num -= 40;
            res += 'XL';
        } else if (num >= 10) {
            num -= 10;
            res += 'X';
        } else if (num >= 9) {
            num -= 9;
            res += 'IX';
        } else if (num >= 5) {
            num -= 5;
            res += 'V';
        } else if (num >= 4) {
            num -= 4;
            res += 'IV';
        } else {
            num -= 1;
            res += 'I';
        }
    }
    return res;
};

// Offical 模拟
var intToRoman2 = function(num) {
    const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
                    [100, "C"],[90, "XC"], [50, "L"], [40, "XL"], [10, "X"],
                    [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    const roman = [];
    // 关注for的用法
    for (const [value, symbol] of valueSymbols) {
        while (num >= value) {
            num -= value;
            roman.push(symbol);
        }
        if (num == 0) {
            break;
        }
    }
    return roman.join('');
};

// test
// let num = 1994
// console.log(intToRoman(num));