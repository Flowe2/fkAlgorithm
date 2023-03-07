/**
 * @param {number[]} amount
 * @return {number}
 */
let fillCups = function (amount) {
    //正确写法: =>直接接返回值, 如果用{}的话需要在里面写return
    amount.sort((a, b) => a - b);
    // amount.sort((a, b) => (return a - b));
    // amount.sort((a, b) => {a - b}); // 是错误的
    return (amount[2] > amount[1] + amount[0]) ? amount[2] : Math.ceil((amount[0] + amount[1] + amount[2]) / 2);
};

// test
let amount = [5, 0, 0];
console.log(fillCups(amount));