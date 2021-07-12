# Leetcode Tour

> @个人C语言学习笔记 `/` 数据结构复习 `/` leetcode
> @*`Flowe2`*

---
# 目录
- [Questions & Answers](#questions--answers)
    - [1. 两数之和](#1-两数之和)
    - [2. 两数相加](#2-两数相加)

---

## Questions & Answers

#### 1. 两数之和

> 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。  
> 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。  
> 你可以按任意顺序返回答案。

* **题解**:
    ```C
    // BF
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
    ```


#### 2. 两数相加

> 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
> 请你将两个数相加，并以相同形式返回一个表示和的链表。
> 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

* **题解**:
    ```C
    
    ```