Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return [];
    }
    let toward = 1;
    let [row, col, index] = [0, 0, 0];
    const res = new Array(rowsCount).fill(0).map(() => new Array(colsCount).fill(0));
    while (col < colsCount) {
        while (-1 < row && row < rowsCount) {
            res[row][col] = this[index];
            index++;
            if (toward === 1) {
                row++;
            } else {
                row--;
            }
        }
        row += toward === 1 ? -1 : 1;
        toward *= -1;
        col++;
    }
    return res;
};

let arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
console.log(arr.snail(5, 4));
