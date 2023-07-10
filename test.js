let arr = [0, 1];

function noRepeat(arr) {
    const L = arr.length;
    if (!arr || L < 2) {
        return L;
    }
    let index = 0;
    for (let i = 1; i < L; i++) {
        if (arr[i] !== arr[index]) {
            index++;
            arr[index] = arr[i];
        }
    }
    console.log(arr);
    return index + 1;
}

console.log(noRepeat(arr));
