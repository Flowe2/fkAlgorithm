#include <stdio.h>
#include <stdlib.h>

typedef struct LinkNode
{
   int data;
   struct LinkNode *next;
} QueueLink;

typedef struct
{
   QueueLink *front, *rear;
} Queue;

void initQueue(Queue *q)
{
   q->front = (QueueLink *)malloc(sizeof(QueueLink));
   q->rear = (QueueLink *)malloc(sizeof(QueueLink));
   q->front->next = NULL;
}

int main()
{
   Queue q;
   initQueue(&q);

   system("pause");
   return 0;
}