// my solution: 分割字符, 不够精简
var compareVersion = function(version1, version2) {
    let a = version1.split(".");
    let b = version2.split(".");
    for (let i in a) {
        a[i] = Number(a[i]);
    }
    for (let j in b) {
        b[j] = Number(b[j]);
    }
    let n = a.length;
    if (a.length < b.length) {
        n = b.length;
    }
    for (let i=0; i<n; i++) {
        if ( !a[i] ) {
            a[i] = 0;
        }
        if ( !b[i] ) {
            b[i] = 0;
        }
        if (a[i] < b[i]) {
            return -1;
        } else if (a[i] > b[i]){
            return 1;
        } else {
            continue;
        }
    }
    return 0;
};

// 官方题解: 分割字符
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; ++i) {
        let x = 0, y = 0; // 处理某位版本号不存在的情况
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }
        if (i < v2.length) {
            y = parseInt(v2[i]);
        }
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
    }
    return 0;
};

// 官方题解: 双指针
var compareVersion = function(version1, version2) {
    const n = version1.length, m = version2.length;
    let i = 0, j = 0;
    while (i < n || j < m) {
        let x = 0;
        for (; i < n && version1[i] !== '.'; ++i) {
            x = x * 10 + version1[i].charCodeAt() - '0'.charCodeAt();
        }
        ++i; // 跳过点号
        let y = 0;
        for (; j < m && version2.charAt(j) !== '.'; ++j) {
            y = y * 10 + version2[j].charCodeAt() - '0'.charCodeAt();
        }
        ++j; // 跳过点号
        if (x !== y) {
            return x > y ? 1 : -1;
        }
    }
    return 0;
};