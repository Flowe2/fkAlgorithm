let addBinary = function (a, b) {
    let res = ''
    let carry = 0;
    let [iA, iB] = [a.length - 1, b.length - 1];
    while (iA >= 0 && iB >= 0) {
        let temp = Number(a[iA]) + Number(b[iB]) + carry;
        if (temp > 1) {
            carry = 1
            temp = temp - 2;
        } else {
            carry = 0;
        }
        res = temp.toString() + res;;
        iA--;
        iB--;
    }
    while (carry) {
        if (iA >= 0) {
            let temp = Number(a[iA]) + carry;
            if (temp > 1) {
                carry = 1
                temp = temp - 2;
            } else {
                carry = 0;
            }
            res = temp.toString() + res;
            iA--;
        } else if (iB >= 0) {
            let temp = Number(b[iB]) + carry;
            if (temp > 1) {
                carry = 1
                temp = temp - 2;
            } else {
                carry = 0;
            }
            res = temp.toString() + res;
            iB--;
        } else {
            res = carry.toString() + res;
            carry = 0;
        }
    }
    if (iA >= 0) {
        res = a.slice(0, iA + 1) + res;
    }
    if (iB >= 0) {
        res = b.slice(0, iB + 1) + res;
    }
    debugger
    return res;
};

// test
let a = '100';
let b = '110010'
console.log(addBinary(a, b));