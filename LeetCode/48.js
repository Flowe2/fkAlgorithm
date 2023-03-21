/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 虽然题目让原地旋转, 还是想先试试辅助矩阵
// matrix[row][col] => matrix[col][n-1-row]
// 时间O(N^2) 空间O(N^2) 居然时间超99.07%空间超75.59%
/*
let rotate = function (matrix) {
    let N = matrix.length;
    // let isOdd = N % 2 ? true : false;
    const helper = new Array(N).fill(0).map(() => new Array(N).fill(0));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            helper[j][N - 1 - i] = matrix[i][j];
        }
    }
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
        matrix[i][j] = helper[i][j];
        }
    }
};
*/

// 上下翻转 + 主对角线翻转
// O(N^2)的时间 + O(1)的空间, 结果运行表现远低于辅助矩阵……
let rotate = function (matrix) {
    const N = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(N / 2); i++) {
        for (let j = 0; j < N; j++) {
            [matrix[i][j], matrix[N - i - 1][j]] = [matrix[N - i - 1][j], matrix[i][j]];
        }
    }
    // 主对角线翻转
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};

// test
let matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(matrix);
console.log(matrix.toString());
debugger