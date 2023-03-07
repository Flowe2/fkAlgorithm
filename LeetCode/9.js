// 非转字符串
var isPalindrome = function (x) {
    let temp = x;
    if (temp < 0) {
        return false
    } else {
        let a = [];
        while (temp > 0) {
            a.push(temp % 10);
            temp = Math.floor(temp / 10);
        }
        let reversed = 0;
        let loop = a.length;
        for (let i = 0; i < loop; i++) {
            reversed += (a.pop()) * (10 ** i);
        }
        return reversed == x;
    }
};

// 转字符串处理
var isPalindrome2 = function (x) {
    let temp = x;
    if (temp < 0) {
        return false
    } else {
        let a = Array.from(x.toString());
        // arr.reverse()会改变原数组, 用slice()创建一个子数组
        let temp = a.slice().reverse();
        for (let i = 0; i < temp.length; i++) {
            if (a[i] != temp[i]) {
                return false;
            }
        }
        return true;
    }
};

let input = 121;
let input2 = 1000021;
console.log(isPalindrome(input));
console.log(isPalindrome2(input2));