#include <stdio.h>
#include <stdlib.h>

int test(int a, int b)
{
    return (a > b) - (a < b);
}

int main()
{
    printf("%d\n", test(1, 2));
    printf("%d\n", test(1, 1));
    printf("%d\n", test(1, 0));

    return 0;
}