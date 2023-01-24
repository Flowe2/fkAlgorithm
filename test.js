// let x = { a: [1, 2, 3], c: [4, 5, 6], d: [7, 8, 9] };
// let z = {};

// let y = [1, 8, 9];
// y = new Set(y);

// for (let i in x) {
//     // console.log(x[i]);
//     x[i] = new Set(x[i]);
//     z[i] = [];
//     // console.log(x[i]);
//     for (let j of y) {
//         // console.log(j);
//         if (x[i].has(j)) {
//             z[i].push(j);
//         }
//     }
// }

// for (let i in z) {
//     // console.log(typeof(z[i]));
//     if (!z[i].length) {
//         console.log(1);
//         delete z[i];
//     }
// }

// console.log(z);

/**
 * @param {string} s
 * @return {number}
 */
// let lengthOfLongestSubstring = function (s) {
//     // 正则过滤, 保留字母数字
//     s = s.replace(/[^a-zA-Z0-9]/gi, "");
//     if (s.length == 0) {
//         return 0;
//     }
//     if (s.length == 1) {
//         return 1;
//     }
//     let front = 0, back = 1, res = 1, current = 1;
//     while (back <= s.length && front < back) {
//         current = back - front + 1;
//         let temp = s.slice(front, back + 1);
//         temp = new Set(temp);
//         back++;
//         if (temp.size < current) {
//             current -= 1;
//             front = back - 1;
//         }
//         if (current >= res) {
//             res = current;
//         }
//     }
//     return res;
// };

// let s = "pwwkew";
// console.log(lengthOfLongestSubstring(s));

// 剑指offer.6
/**
 * @param {ListNode} head
 * @return {number[]}
 */
let ListNode = function(val) {
    this.val = val;
    this.next = null;
}
let reversePrint = function (head) {
    let res = [];
    let current = head;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res.reverse();
};
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(1);

console.log(reversePrint(head));