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
//     L = NULL;
// }

// void Empty(LinkList L)
// {
    (L == NULL) ? printf("is empty.\n"); : printf("isnot empty.\n");    
// }

// int main()
// {
//     LinkList L;
//     Init(&L);
//     Empty(&L);
//     LNode temp = *L;
//     for(int i=0; i<5; i++){
//         temp.data = 5;
//         temp.next = 
//     } 

//     return 0;
// }





/* 带头结点的单链表 */
typedef struct LNode
{
    int data;
    struct LNode *next;    
}LNode, *LinkList;

bool Init(LinkList *L){
    L = (LNode *) malloc (sizeof(LNode));
    if (L == NULL) {
        return false;
    }
    L.next = NULL;
    return true;
}
