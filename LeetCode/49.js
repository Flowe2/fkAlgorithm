/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function (strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let chs = strs[i].split('').sort().join('');
        if (map.has(chs)) {
            map.set(chs, map.get(chs).concat([strs[i]]));
        } else {
            map.set(chs, [strs[i]]);
        }
    }
    let res = [];
    for (let iter of map.values()){
        res.push(iter);
    }
    return res;
};

// test
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
debugger