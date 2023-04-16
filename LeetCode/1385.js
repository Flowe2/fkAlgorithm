/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */

// official
let findTheDistanceValue = function (arr1, arr2, d) {
    // arr1 = arr1.sort((a,b)=>a-b);
    arr2 = arr2.sort((a, b) => a - b);
    let res = 0;
    const binarySearch = (arr, target) => {
        let [l, r] = [0, arr.length - 1];
        if (arr[r] < target) {
            return r + 1;
        }
        while (l < r) {
            let mid = l + Math.floor((r - l) / 2);
            if (arr[mid] < target) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return l;
    }
    for (let i of arr1) {
        let BS = binarySearch(arr2, i);
        let tf = true;
        if (BS < arr2.length) {
            tf &= arr2[BS] - i > d;
        }
        if (BS - 1 >= 0 && BS - 1 <= arr2.length) {
            tf &= i - arr2[BS - 1] > d;
        }
        res += tf ? 1 : 0;
    }
    return res;
};

// shared
let findTheDistanceValue2 = function (arr1, arr2, d) {
    arr2 = arr2.sort((a, b) => a - b);
    let res = 0;
    
    const binarySearch = (arr, low, high) => {
        let [l, r] = [0, arr.length - 1];
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            if (arr[mid] >= low && arr[mid] <= high) {
                return false;
            } else if (arr[mid] < low) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return true;
    }

    for (let i of arr1) {
        let [low, high] = [i - d, i + d];
        if (binarySearch(arr2, low, high)) {
            res++;
        }
    }
    return res;
};