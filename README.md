# fkAlgorithm
> @个人C语言学习笔记/数据结构复习/leetcode
> ***`@Flowe2`***

<!-- TOC -->

- [fkAlgorithm](#fkalgorithm)
  - [C语言](#c语言)
    - [基本概念](#基本概念)
    - [格式化输出](#格式化输出)
    - [表达式](#表达式)
    - [判断与循环](#判断与循环)
    - [数组](#数组)
    - [数据类型](#数据类型)
    - [TIPS](#tips)
  - [数据结构](#数据结构)
  - [LeetCode](#leetcode)

<!-- /TOC -->

---
## C语言
> [书籍介绍](http://knking.com/books/c2/index.html)
> [课后练习题答案](http://knking.com/books/c2/answers/index.html)  
> [全书源码查看](http://knking.com/books/c2/programs/index.html)

### 基本概念

1. 编译&链接
    预处理 -> 编译 -> 链接

2. 程序结构
    ```C
    #include <...>;
    int main() {
        // ...
        return 0;
    }
    // ...
    type function() {
        // ...
        }
    ```
    1. 预处理器指令
    2. 主函数 函数
    3. 语句 & 表达式
    4. 常量 `#define MAX_NUM 10`
    5. 变量 `int a=10;`

3. 注释
   * 单行: `// content`
   * 多行: `/* content */`

4. 变量
   * 类型
       > 详见 [数据类型](#数据类型)
   * 声明
   * 赋值

### 格式化输出

**printf & scanf**

* 转换说明, `%-m.pX`格式
  * `-`: 指定左对齐, 无则默认右对齐
  * `m`: 最小字段宽度
  * `p`: 精度
  * `X`: 转换说明符, **`d - 十进制, e  - 指数形浮点数, f - 定点十进制浮点数, g - 指数形式/定点十进制浮点数`**
  * 那么如何显示`%`? 使用`%%`即可print一个%
* 转义序列
  * 常见: **`\a - 警报符, \b - 退回符, \n - 换行符, \t - 水平制表符`**
  * > 详见 [数据类型](#数据类型)

### 表达式

1. 算术运算符
    | type | description                |
    | :--- | :------------------------- |
    | `+`  | 相加(一元时为正号)         |
    | `-`  | 相减(一元时为符号)         |
    | `*`  | 相乘                       |
    | `/`  | 相除                       |
    | `%`  | 模运算/取余                |
    | `++` | 自增(区别作为前缀和后缀时) |
    | `--` | 自减(区别作为前缀和后缀时) |

2. 赋值运算符
    | type  | description                                     |
    | :---- | :---------------------------------------------- |
    | =`    | 最简单基础的赋值运算符                          |
    | `+=`  | 加且赋值运算符, `C += A 相当于 C = C + A`       |
    | `-=`  | 减且赋值运算符, `C -= A 相当于 C = C - A`       |
    | `*=`  | 乘且赋值运算符, `C *= A 相当于 C = C * A`       |
    | `/=`  | 除且赋值运算符, `C /= A 相当于 C = C / A`       |
    | `%=`  | 求模且赋值运算符, `C %= A 相当于 C = C % A`     |
    | `<<=` | 左移且赋值运算符, `C <<= 2 等同于 C = C << 2`   |
    | `>>=` | 右移且赋值运算符, `C >>= 2 等同于 C = C >> 2`   |
    | `&=`  | 按位与且赋值运算符, `C &= 2 等同于 C = C & 2`   |
    | `^=`  | 按位异或且赋值运算符, `C ^= 2 等同于 C = C ^ 2` |
    | `|=`  | 按位或且赋值运算符, `C| = 2 等同于 C = C | 2`   |

3. 关系运算符(逻辑表达式)
    | type | description            |
    | :--- | :--------------------- |
    | `==` | 是否相等               |
    | `!=` | 是否不等               |
    | `>`  | 左值是否大于右值       |
    | `<`  | 左值是否小于右值       |
    | `>=` | 左值是否大于或等于右值 |
    | `<=` | 左值是否小于或等于右值 |

4. 逻辑运算符(逻辑表达式)
    | type | description |
    | :--- | :---------- |
    | `&&` | 与运算符    |
    | `||` | 或运算符    |
    | `!`  | 非运算符    |

### 判断与循环

1. 判断
   * **if** - (else if) - else
        ```C
        if( boolean_expression 1 )
        {
            /* 当布尔表达式 1 为真时执行 */
        }
        else if( boolean_expression 2)
        {
            /* 当布尔表达式 2 为真时执行 */
        }
        else 
        {
            /* 当上面条件都不为真时执行 */
        }
        ```
        > 判断boolean_expression, 为真则执行对应语句块  
        > 没有 {} 辅助时, else默认与其最近的if匹配  
   * **switch** - case - default
        ```C
        switch(expression)
        {
            case constant-expression 1 :
                statement(s);
                break; /* 可选的 */
            case constant-expression 2 :
                statement(s);
                break; /* 可选的 */
            /* 您可以有任意数量的 case 语句 */
            default : /* 可选的 */
                statement(s);
        }
        ```
        > 根据expression判断, 跳转执行对应constant-expression下的语句块, 若无匹配则执行default下的语句块  
        > 也可以不写defaul情况  
        > 漏写break会使下一条件的语句被执行  
        > 有时也故意不写来达到几个条件分支共享代码的目的  
   * **条件运算符**(三元运算符)
        ```C
        Exp1 ? Exp2 : Exp3;
        ```
        > 若Exp1为真, 则执行Exp2, 否则执行Exp3  

2. 循环
   * **while**
        ```C
        while(condition)
            {
            statement(s);
            }
        ```
        > 判断condition, 为true则执行statement(s), 否则结束循环  
   * **do...while**
        ```C
        do
        {
            statement(s);
        }while( condition );
        ```
        > 执行statements(s), 然后判断condition, 为true则继续执行, 否则结束循环  
   * **for**
        ```C
        for ( init; condition; increment )
        {
            statement(s);
        }
        ```
        > 1. init 首先执行, 且仅执行一次, 声明并初始化任何循环控制变量(也可以不在这里写任何语句, 只要有一个分号出现即可)  
        > 2. 判断 condition, 如果为真, 则执行循环主体, 为假则不结束循环  
        > 3. 执行 statement(s) 后, 会执行 increment 语句, 更新循环控制变量(该语句也可以留空, 只要在条件后有一个分号出现即可)  
        > 4. 同2.再次判断循环条件, 重复上述2~4  
   * **循环控制语句**
        | type          | size                                                             |
        | :------------ | :--------------------------------------------------------------- |
        | break 语句    | 终止循环或`switch`语句, 继续执行紧接着循环或`switch`的下一条语句 |
        | continue 语句 | 立刻停止本次循环迭代, 重新开始下次循环迭代                       |
        | goto 语句     | 将控制转移到被标记的语句(但不建议使用)                           |
        > goto 语句配对的标记语句为"xxx:", e.g.:`goto myGoto; Goto:`, 其坏处在于过多使用会使程序逻辑看上去逻辑混乱, 毕竟goto可往前也可往后跳转  

### 数组



### 数据类型

1. **整数**
    | type           | size        | rage                                               |
    | :------------- | :---------- | :------------------------------------------------- |
    | char           | 1 字节      | -128 ~ 127 或 0 ~ 255                              |
    | unsigned char  | 1 字节      | 0 ~ 255                                            |
    | signed char    | 1 字节      | -128 ~ 127                                         |
    | int            | 2 或 4 字节 | -32,768 ~ 32,767 或 -2,147,483,648 ~ 2,147,483,647 |
    | unsigned int   | 2 或 4 字节 | 0 ~ 65,535 或 0 ~ 4,294,967,295                    |
    | short          | 2 字节      | -32,768 ~ 32,767                                   |
    | unsigned short | 2 字节      | 0 ~ 65,535                                         |
    | long           | 4 字节      | -2,147,483,648 ~ 2,147,483,647                     |
    | unsigned long  | 4 字节      | 0 ~ 4,294,967,295                                  |

2. **浮点数**
    | type        | size    | rage                  | accuracy  |
    | :---------- | :------ | :-------------------- | :-------- |
    | float       | 4 字节  | 1.2E-38 ~ 3.4E+38     | 6 位小数  |
    | double      | 8 字节  | 2.3E-308 ~ 1.7E+308   | 15 位小数 |
    | long double | 16 字节 | 3.4E-4932 ~ 1.1E+4932 | 19 位小数 |

3. **void**
    | type          | description                                                                                                                                    |
    | :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
    | 函数返回为空  | 不返回值的函数的返回类型为空。例如 void exit (int status);                                                                                     |
    | 函数参数为空  | 不带(不接受)参数的函数可以接受一个 void。例如 int rand(void);                                                                                  |
    | 指针指向 void | 类型为 void * 的指针代表对象的地址, 而不是类型。例如, 内存分配函数 void *malloc( size_t size ); 返回指向 void 的指针, 可以转换为任何数据类型。 |

4. 转义序列
   | type | description                         | ASCII value(DEC) |
   | :--- | :---------------------------------- | :--------------- |
   | `\a` | 响铃(BEL)                           | 007              |
   | `\b` | 退格(BS), 将当前位置移到前一列     | 008              |
   | `\f` | 换页(FF)，将当前位置移到下页开头    | 012              |
   | `\n` | 换行(LF), 将当前位置移到下一行开头 | 010              |
   | `\r` | 回车(CR), 将当前位置移到本行开头   | 013              |
   | `\t` | 水平制表(HT)                        | 009              |
   | `\v` | 垂直制表(VT)                        | 011              |
   | `\'` | 单引号                              | 039              |
   | `\"` | 双引号                              | 034              |
   | `\\` | 反斜杠                              | 092              |

### TIPS

* 访问结构的成员时使用点运算符, 而通过指针访问结构的成员时, 则使用箭头运算符

* 逗号运算符`,`
    > `exp1, exp2;` 一行执行  
    > 只有一个表达式的情况下执行多条表达式  

* 空语句
    > `;`  
    > 什么也不做, 常用于编写空循环体的循环  

---
## 数据结构

---
## LeetCode