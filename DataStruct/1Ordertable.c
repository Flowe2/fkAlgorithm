#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

/*********** 静态分配 ***********/
#define Maxsise 10
typedef struct
{
    int data[Maxsise];
    int length;
} SqList;

void InitList(SqList *L)
{
    for (int i = 0; i < Maxsise; i++)
    {
        L->data[i] = 0;
    }
    L->length = 0;
}

void PrintList(SqList *L)
{
    for (int i = 0; i < Maxsise; i++)
    {
        printf("#%d=%d\t", i + 1, L->data[i]);
    }
    printf("length: %d\n", L->length);
}

// void ListInsert(SqList *L, int pos, int val)
// {
//     if (L->length == 10)
//     {
//         printf("List is already full.\n");
//     }
//     else if (pos > L->length + 1)
//     {
//         printf("error postition\n");
//     }
//     else
//     {
//         for (int i = L->length; i >= pos; i--)
//         {
//             L->data[i] = L->data[i - 1];
//         }
//     }
//     L->data[pos - 1] = val;
//     L->length++;
// }
bool ListInsert(SqList *L, int pos, int val)
{
    if (L->length == 10)
    {
        printf("List is already full.\n");
        return false;
    }
    if (pos > L->length + 1 || pos < 1)
    {
        printf("error insert postition\n");
        return false;
    }
    for (int i = L->length; i >= pos; i--)
    {
        L->data[i] = L->data[i - 1];
    }

    L->data[pos - 1] = val;
    L->length++;
    return true;
}

bool ListDelet(SqList *L, int pos, int *ret)
{
    if (pos > L->length || pos < 1)
    {
        printf("error delet postition\n");
        return false;
    }
    *ret = L->data[pos - 1];
    for (int i = 0; i < L->length; i++)
    {
        L->data[i - 1] = L->data[i];
    }
    L->data[--L->length] = 0;
    return true;
}

int GetElem(SqList *L, int pos)
{
    if (pos > L->length || pos < 1)
    {
        printf("error delet postition\n");
        return -1;
    }
    return L->data[pos - 1];
}

int LocateElem(SqList *L, int val)
{
    for (int i = 0; i < L->length; i++)
    {
        if (L->data[i] == val)
        {
            return i + 1;
        }
    }
    return -1;
}

int main()
{
    SqList L;
    InitList(&L);
    L.data[0] = 2;
    L.data[1] = 4;
    L.data[2] = 6;
    L.data[3] = 8;
    L.length = 4;
    PrintList(&L);
    if (ListInsert(&L, 1, 9))
    {
        printf("insert success\n");
        PrintList(&L);
    }
    if (ListInsert(&L, 7, 9))
    {
        printf("insert success\n");
        PrintList(&L);
    }
    int e = -1;
    if (ListDelet(&L, 1, &e))
    {
        printf("delete success. %d\n", e);
        PrintList(&L);
    }
    int p = GetElem(&L, 2);
    if (p != -1)
    {   
        printf("#2 is %d\n", p);
    }
    int r = LocateElem(&L, 6);
    if (r != -1){
        printf("8 is #%d\n", r);
    }
    return 0;
}





/*********** 动态分配 ***********/
// #define InitSize 10
// typedef struct
// {
//     int *data;
//     int MaxSize;
//     int length;
// } SqList;

// void InitList(SqList *L)
// {
//     L->data = (int *)malloc(InitSize * sizeof(int));
//     L->length = 0;
//     L->MaxSize = InitSize;
//     for (int i = 0; i < InitSize; i++)
//     {
//         L->data[i] = 0;
//     }
// }

// void PrintList(SqList *L)
// {
//     printf("length: %d\n", L->length);
//     for (int i = 0; i < L->MaxSize; i++)
//     {
//         printf("no.%d: %d\t", i + 1, L->data[i]);
//     }
// }

// void IncreaseSize(SqList *L, int len)
// {
//     int *p = L->data;
//     L->MaxSize += len;
//     L->data = (int *)malloc(L->MaxSize * sizeof(int));
//     for (int i = 0; i < L->length; i++)
//     {
//         L->data[i] = p[i];
//     }
//     for (int j = L->length; j < L->MaxSize; j++)
//     {
//         L->data[j] = 0;
//     }
//     free(p);
// }

// int main()
// {
//     SqList L;
//     InitList(&L);
//     PrintList(&L);
//     for (int i = 0; i < 5; i++)
//     {
//         L.data[i] = 5;
//         L.length++;
//     }
//     IncreaseSize(&L, 5);
//     PrintList(&L);
//     return 0;
// }