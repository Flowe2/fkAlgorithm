#include <stdio.h>
#include <stdlib.h>

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