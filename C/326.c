#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// C语言中`%`不能对double使用
bool isPowerOfThree(int n) {
    if (n == 1) {
        return true;
    }
    if (n == 0 || n%3 != 0) {
        return false;
    }
    while(n/3 != 1) {
        if (n%3 != 0) {
            return false;
        }
        n /= 3;
    }
    return true;
}

int main() {
    int n[] = {27, 0, 1, 45, 81};
    bool res = false;
    for (int i=0; i<sizeof(n)/sizeof(n[0]); i++) {
        res = isPowerOfThree(n[i]);
        printf("%d: %d\n", n[i], res);
    }

    system("pause");
    return 0;
}