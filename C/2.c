#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){
    struct ListNode *header = NULL, *tail = NULL;
    int 
    while()
    // 逐位相加, 处理进位
    // 再逆序处理
}

int main()
{
    int b[3] = {1, 2, 3}, *x, *y, *z;
    x = b;
    z = b+2;
    y = x + (z - x)/2;
    printf("%d, %d, %d\n", x, y, z);
    printf("%d, %d, %d\n", *x, *y, *z);

    return 0;
}

