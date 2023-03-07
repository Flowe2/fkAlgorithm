/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// try 1 - Failed
/*
let wordBreak = function (s, wordDict) {
    let res = false;
    let dictionary = new Set();
    let L = -1;
    for (let word of wordDict) {
        dictionary.add(word);
        L = Math.max(L, word.length);
    }
    let [i, j] = [0, 1];
    while (j - i <= L && s) {
        let temp = s.substring(i, j);
        if (dictionary.has(temp)) {
            s = s.substring(j);
            [i, j] = [0, 1];
            res = true;
        } else {
            j++;
            res = false;
        }
    }
    return res;
};
*/

// try 2
const wordBreak = (s, wordDict) => {
    const len = s.length;
    const wordSet = new Set(wordDict);
    const memo = new Array(len);

    const canBreak = (start) => {
        if (start == len) return true;
        if (memo[start] !== undefined) return memo[start]; // memo中有，就用memo中的

        for (let i = start + 1; i <= len; i++) {
            const prefix = s.slice(start, i);
            if (wordSet.has(prefix) && canBreak(i)) {
                memo[start] = true; // 当前递归的结果存一下
                return true;
            }
        }
        memo[start] = false; // 当前递归的结果存一下
        return false;
    };
    return canBreak(0);
};

// test
let s = "leetcode";
let words = ["leet", "code"];
console.log(wordBreak(s, words));