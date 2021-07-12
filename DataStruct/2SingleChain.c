#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

/* 不带头结点的单链表 */
// typedef struct LNode
// {
//     int data;
//     struct LNode *next;
// } LNode, *LinkList;

// void Init(LinkList *L)
// {
//     *L = NULL;
// }

// void Empty(LinkList L)
// {
//     (L == NULL) ? printf("is empty.\n") : printf("isnot empty.\n");
// }

// int main()
// {
//     LinkList L;
//     Init(&L);
//     Empty(L);

//     return 0;
// }


/* 带头结点的单链表 */
// #define Head 0
// typedef struct LNode
// {
//     int data;
//     struct LNode *next;
// } LNode, *LinkList;

// bool Init(LinkList *L)
// {
//     *L = (LNode *)malloc(sizeof(LNode));
//     if (L == NULL)
//     {
//         // 分配失败
//         return false;
//     }
//     (*L)->data = Head;
//     (*L)->next = NULL;
//     return true;
// }

// void Empty(LinkList L)
// {
//     (L->next == NULL) ? printf("is empty.\n") : printf("isnot empty.\n");
// }

// int main()
// {
//     LinkList L; // L 是一个LNode *指针
//     Init(&L);
//     Empty(L);
    

//     return 0;
// }