let x = { a: [1, 2, 3], c: [4, 5, 6], d: [7, 8, 9] };
let z = {};

let y = [1, 8, 9];
y = new Set(y);

for (let i in x) {
    // console.log(x[i]);
    x[i] = new Set(x[i]);
    z[i] = [];
    // console.log(x[i]);
    for (let j of y) {
        // console.log(j);
        if (x[i].has(j)) {
            z[i].push(j);
        }
    }
}

for (let i in z) {
    // console.log(typeof(z[i]));
    if (!z[i].length) {
        console.log(1);
        delete z[i];
    }
}

console.log(z);