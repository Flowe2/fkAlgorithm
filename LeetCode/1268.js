/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
let suggest = function (products, searchWord) {
    let res = [];
    products.sort();
    for (let i = 0; i < searchWord.length; i++) {
        let temp = [];
        for (let product of products) {
            if (product[i] == searchWord[i]) {
                temp.push(product);
            }
        }
        products = temp;
        res.push(products.length > 3 ? products.slice(0, 3) : products);
    }
    return res;
}

// test 1
let products1 = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
let searchWord1 = "mouse";

// test 2
let products2 = ["havana"];
let searchWord2 = "havana";

// test 3
let products3 = ["bags","baggage","banner","box","cloths"];
let searchWord3 = "bags";

// test 4
let products4 = ["havana"];
let searchWord4 = "tatiana";

let arr1 = suggest(products1, searchWord1);
console.log(arr1);
let arr2 = suggest(products2, searchWord2);
console.log(arr2);
let arr3 = suggest(products3, searchWord3);
console.log(arr3);
let arr4 = suggest(products4, searchWord4);
console.log(arr4);

debugger;