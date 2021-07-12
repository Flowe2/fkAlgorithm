#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    for (int i=0; i<numsSize-1; i++) {
        for (int j=1; j<numsSize; j++) {
            if (nums[i] + nums[j] == target){
                int * res = malloc(sizeof(int) * 2);
                res[0] = i;
                res[1] = j;
                *returnSize = 2;
                return res;
            }
        }
    }
    *returnSize = 0;
    return NULL;
}

int main()
{
    int b[] = {3,2,4}, n = 3, target = 6, *returnSize = malloc(sizeof(int));
    int *res = NULL;
    
    if ( (res = twoSum(b, n, target, returnSize)) != NULL ) {
        printf("index: %d, %d\n", res[0], res[1]);
    }

    return 0;
}