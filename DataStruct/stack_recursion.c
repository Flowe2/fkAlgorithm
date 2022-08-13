#include <stdio.h>
#include <stdlib.h>

#define Maxsize 20;

typedef struct stack_recursion
{
    int data[Maxsize];
    int top;
};


int Fib(int n) {
    if (n == 1) {
        return 1;
    } else if (n == 0) {
        return 0;
    } else {
        return Fib(n-1) + Fib(n-2);
    }
}

int main() {
    int n = 3;
    stack_recursion mysat

    n = Fib(n);
    printf("%d\n", n);

    system("pause");
    return 0;
}