let peakIndexInMountainArray = function (arr) {
    let [l, r] = [1, arr.length - 2];
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if (arr[mid] > arr[mid + 1]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
};