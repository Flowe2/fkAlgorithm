/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
    // 正则过滤, 保留字母数字 // no need
    // s = s.replace(/[^a-zA-Z0-9]/gi, "");
    if (s.length == 0) {
        return 0;
    }
    if (s.length == 1) {
        return 1;
    }
    let front = 0, back = 1, res = 1, current = 1;
    while (back <= s.length && front < back) {
        current = back - front + 1;
        let temp = s.slice(front, back + 1);
        temp = new Set(temp);
        back++;
        if (temp.size < current) {
            current -= 1;
            front ++;
        }
        if (current >= res) {
            res = current;
        }
    }
    return res;
};

// test
// let s = "pwwkew";
// console.log(lengthOfLongestSubstring(s));