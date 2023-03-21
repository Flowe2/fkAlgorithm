/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let quickMul = function (x, N) {
    let res = 1;
    let contribute = x;
    while (N > 0) {
        if (N % 2 == 1) {
            res *= contribute;
        }
        contribute *= contribute;
        N = Math.floor(N/2);
    }
    return res;
}

//  快速幂算法
let myPow = function (x, n) {
    const N = n;
    return N >= 0 ? quickMul(x, N) : 1 / quickMul(x, -N);
};