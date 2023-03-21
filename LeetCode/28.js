/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function (str, target) {
    let i = 0;
    let j = 0;
    let next = getNext(target);
    while (i < str.length && j < target.length) {
        if (j === -1 || str[i] === target[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    if (j === target.length) {
        return i - j;
    }
    return -1;
}

let getNext = function (str) {
    let next = [-1];
    let j = 0;
    let k = -1;
    while (j < str.length - 1) {
        if (k === -1 || str[j] === str[k]) {
            j++;
            k++;
            next[j] = k;
        } else {
            k = next[k];
        }
    }
    return next;
}

// test
let str1 = "mississippi";
let needle1 = "issip";
console.log(strStr(str1, needle1));
// let str2 = "sadbutsad";
// let needle2 = "sad";
// let str3 = "leetcode";
// let needle3 = "leeto";