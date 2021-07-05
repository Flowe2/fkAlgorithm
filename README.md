# fkAlgorithm

> @个人C语言学习笔记 `/` 数据结构复习 `/` leetcode
> @*`Flowe2`*
  
---

- [C语言](#c语言)
  - [基本概念](#基本概念)
  - [格式化输出](#格式化输出)
  - [表达式](#表达式)
  - [数据类型](#数据类型)
  - [判断与循环](#判断与循环)
  - [数组](#数组)
  - [函数](#函数)
  - [程序结构](#程序结构)
  - [指针](#指针)
  - [字符串](#字符串)
  - [TIPS](#tips)
- [数据结构](#数据结构)
- [LeetCode](#leetcode)

---

## C语言

> [书籍介绍](http://knking.com/books/c2/index.html)
> [课后练习题答案](http://knking.com/books/c2/answers/index.html)  
> [全书源码查看](http://knking.com/books/c2/programs/index.html)

---

### 基本概念

1. 编译&链接
    预处理 -> 编译 -> 链接

2. 程序结构(详见 [程序结构](#程序结构))
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

---

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

---

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

3. 关系运算符 (逻辑表达式)
    | type | description            |
    | :--- | :--------------------- |
    | `==` | 是否相等               |
    | `!=` | 是否不等               |
    | `>`  | 左值是否大于右值       |
    | `<`  | 左值是否小于右值       |
    | `>=` | 左值是否大于或等于右值 |
    | `<=` | 左值是否小于或等于右值 |

4. 逻辑运算符 (逻辑表达式)
    | type | description |
    | :--- | :---------- |
    | `&&` | 与运算符    |
    | `||` | 或运算符    |
    | `!`  | 非运算符    |

---

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
   | type | description                        | ASCII value(DEC) |
   | :--- | :--------------------------------- | :--------------- |
   | `\a` | 响铃(BEL)                          | 007              |
   | `\b` | 退格(BS), 将当前位置移到前一列     | 008              |
   | `\f` | 换页(FF)，将当前位置移到下页开头   | 012              |
   | `\n` | 换行(LF), 将当前位置移到下一行开头 | 010              |
   | `\r` | 回车(CR), 将当前位置移到本行开头   | 013              |
   | `\t` | 水平制表(HT)                       | 009              |
   | `\v` | 垂直制表(VT)                       | 011              |
   | `\'` | 单引号                             | 039              |
   | `\"` | 双引号                             | 034              |
   | `\\` | 反斜杠                             | 092              |

---

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
   * **条件运算符** (三元运算符)
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
        > 1. init 首先执行, 且仅执行一次, 声明并初始化任何循环控制变量 (也可以不在这里写任何语句, 只要有一个分号出现即可)  
        > 2. 判断 condition, 如果为真, 则执行循环主体, 为假则不执行并结束循环  
        > 3. 执行 statement(s) 后, 会执行 increment 语句, 更新循环控制变量 (该语句也可以留空, 只要在条件后有一个分号出现即可)  
        > 4. 同2.再次判断循环条件, 重复上述2~4  
   * **循环控制语句**
        | type          | size                                                             |
        | :------------ | :--------------------------------------------------------------- |
        | break 语句    | 终止循环或`switch`语句, 继续执行紧接着循环或`switch`的下一条语句 |
        | continue 语句 | 立刻停止本次循环迭代, 重新开始下次循环迭代                       |
        | goto 语句     | 将控制转移到被标记的语句 (但不建议使用)                          |
        > goto 语句配对的标记语句为"xxx:", e.g.:`goto myGoto; Goto:`, 其坏处在于过多使用会使程序逻辑看上去逻辑混乱, 毕竟goto可往前也可往后跳转  

---

### 数组

* 变量: 标量 & 聚合
  * 标量: 保存单一数据项
  * 聚合: 可储存一组一组的数据, 数组&结构

* 一维度数组
  * 声明: `type arrayName [ arraySize ];`
  * 初始化: 
    * 声明时初始化语句 (大小可省略): `type arrayName [ (arraySize) ] = {ele 1, ele 2, ..., ele n}; //若初始化数组短语length, 则剩余元素都为0`
    * 指定初始化: `type arrayName [ (arraySize) ] = { [i] = ele i, [j] = ele j, ..., [n] = ele n}; //其余初始化为0`
    * 声明后初始化, 逐一访问进行初始化
  * 访问: `arrayName[i] = xxx;`
  * 下标: 长度为 n 的数组下标从 0 ~ n-1

* 多维数组
  * 数组可有任意维数
  * 声明: `type arrayName [ oneDSize ][ twoDSize ];`
  * 初始化 (二维为例):
    * 嵌套一维数组: `type arrayName [ oneDSize ][ twoDSize ] = {{ele 1, ele 2, ... , ele n}, ..., {...}};`
    * 若嵌套初始化式不够填满行数, 则后面的行默认初始化为`{0, 0, ..., 0}`
    * 若某一嵌套初始化式不够填满当前行, 同一维, 其余位默认为`0`
    * 甚至可以省略掉嵌套的括号 (因为**行主序**)
  * 访问: `arrayName[i][j] = xxx;`, 考点: `arrayName[i, j]`逗号运算符, 实际等于`arrayName[j]`
  * 存储: 二维为例, 在内存中也为`行主序`, 

* C99 支持变长数组
  * 声明: `type arrayName [ n ]; // n为变量`;
    * `n`可以为表达式
    * 常见于除`main`外的函数 (main也可用)

---

### 函数

* 定义:
    ```C
    return_type function_name( parameter list )
    {
        body of the function
    }
    ```
  * 返回类型: return_type 是函数返回的值的数据类型。若不返回值 return_type 为 `void`, 未给出的话编译器会警告, 但不报错, 默认`int`型
  * 函数名称: function_name, 函数名和参数列表一起构成了*函数签名*
  * 参数: parameter list 形式参数参数, 可选, 需要**按顺序以<类型, 形参名>的形式**给出, 当函数被调用时，传递的值为实际参数
  * 函数主体：函数主体包含一组定义函数执行任务的语句, 函数的实际主体可以单独定义

* 声明
    ```C
    return_type function_name( parameter list ); // 注意与函数完整定义不同, 声明语句需要以";"结尾
    ```
  * C语言并未规定函数需在调用点前定义, 对于为给出定义的函数, 编译器会给一个**隐式声明** (返回值默认为int型)
  * **函数原型**: 即函数声明, 早期C语言中, 函数的声明是简单的`return_type function_name()`, 函数原型的名字即与早期这种声明区分

* 调用
    ```C
    function_name( actual_parameters )
    ```
  * 实际参数转换: C语言允许实参类型与形参类型不匹配的调用, 
    * 调用前遇到原型: 自动转为相应类型
    * 调用前未遇到原型: 将进行默认参数提升, `float`转`double`, `char`和`short`转`int`
  * 数组型参数: 函数无法知道其长度, 需通过额外参数提供数组长度

* Return
  * 除`void`型函数外, 函数需要有一个返回值

* 递归
  * 若函数调用自身, 称其为**递归**的

---

### 程序结构

* 局部变量
  * 特性
    1. 自动存储期限
      > 存储期限/存储长度: 在变量存在期间内程序执行部分
      > 局部变量在函数调用时自动分配, 结束时自动回收
    2. 块作用域
      > 从声明开始至函数结尾
  * 静态局部变量
    * 使用`static`关键词可将局部变量变量声明为静态局部变量
    * 在程序执行期间永久存在 (可以用来记录程序调用了几次)
    * 但仍是**块作用域**, 对程序其他部分不可见
  * 形式参数
    * 和局部变量一样的性质: **自动存储期限**, **块作用域**
    * 与局部变量的区别: 每次函数调用时, 会对形参进行自动初始化

* 外部变量/全局变量
  * 特性
    1. 静态存储期限
      > 在程序执行期间永久存在
    3. 文件作用域
      > 从声明开始至文件结尾

* 程序块
  * 形如 `{ 多条语句 }` 的代码块
  * 程序块中的声明变量是局部变量

* 作用域
  * 若一标识符已经是可见的了, 在程序块内命名相同标识符时, 新的声明会隐藏旧的声明
  * 然后在程序块末尾, 标识符重新获得旧的含义

---

### 指针

> Byte = 8 bit  
> 每个字节都有地址

* 指针的声明: `type *pointer_name;`
  * 同基本变量声明一样, 只是多了一个星号`*`

* 指针的使用
  * 取地址运算符: `&`
    > `&a` 即取变量`a`的地址  
  * 间接寻址运算符: `*`
    > `*p` 即取指针`p`所指地址的变量值 (`*p`是实际变量`a`的别名, 改变`*p`也会改变`a`)
  * 在声明时可以将实际变量与指针一起声明并赋值, 不过要求实际变量先声明: `int a=0, *p=&a`

* 指针赋值
  * 对两指针使用赋值运算, 即进行指针的复制 **(前提: 两指针具有相同类型)**

* 指针作为函数参数
  * 定义方法即将对应指针类型形参添加`*`即可
  * C语言的函数无法改变普通的实际变量
  * 使用指针变量作为函数参数传入则可以达到改变实参的目的
  * 若不希望函数改变指针指向变量, 则可以使用`const`关键词来保护参数, 即 `const type * pointer`

* 指针作为返回值
  * 定义方法即将函数返回值后添加`*`即可
  * 函数除返回传入指针参数外, 还可以返回指向外部变量/声明为`static`的局部变量指针
  * 可以用于返回数组
  * **但是**不能返回自动局部变量指针, 因为函数执行完后, 其就不存在了

* 指针与数组  
  > `int a[10], *p`
  * 赋值
    > `p = a`, 即`p`指向数组`a`的起始地址, 等价于`p = &a[0]`  
    > 实际上数组名`a`可以一个指针, `*a`即`a[0]`, `*(a+2)`即`a[2]`
    > 不过, 试图给数组名`a`赋值的操作是错误的, 例如`a++`, 可先将`a`赋给另一指针变量再来改变 (⭐)
  * 指向复合常量的指针
    > 例如: `int *p = (int []){1, 2, 3}` (C99 supported), 可省略声明数变量的过程  
  * 运算 (仅支持三种)
    > 加上整数: 可以通过对指针`p`做运算, 得到数组元素, 当`p = a`时, `p += 2`即`p`指向`a[2]`, 绝不能`指针+指针`  
    > 减去整数: 同理, 但可以`指针-指针`  
    > 两指针相减: 即得两指针间的距离
  * 比较
    > 关系运算符&判等运算符可用, 判断的是两指针的相对位置
  * 处理数组
    > 可用指针来遍历数组, 自增指针即可 `for (p = a; p < &a[N]; p++) {...}` (可用`a + N`代替`&a[N]`)
    > 可以用间接寻址运算符`*`和自增运算符`++`等组合
  * 用指针做数组名
    > 既然可用数组名做指针, C语言也允许将指针看做数组名, 直接进行取下标的操作, `p[i]`即`*(p+i)`
  * 指针处理多维数组
    * 由于C语言对于多维数组仍然是按**行主序**存储的, 在遍历多维数组时, 可将嵌套循环用指针递增来代替
    * 处理行: 
      ```C
        int a[ROWS][COLS], *p, i; // i为待处理行号
        for ( p = &a[i][0]; p < &a[i][0] + COLS; p++ ) 
          { *p = ...; }
      ```
      > 注意声明的`p`为普通`int`指针  
      > `p = &a[i][0]`简写`p = a[i]`  
    * 处理列:
      ```C
        int a[ROWS][COLS], (*p)[COLS], i; // i为待处理列号
        for ( p = &a[0]; p < &a[ROWS]; p++ )
          { (*p)[i] = ...; }
      ```
      > 声明`p`为指向长度为`COLS`的`int`数组的指针  
      > `(*p)[COLS]`使用时需要带括号, 若无括号, 编译器会认为p为指针数组并解释为`*(p[COLS])`, 而非指向数组的指针  
      > `p++`此时就会自增一个`COLS`长度, 从而实现对列遍历
    * 多维数组名做指针时需小心
  * 指针与变长数组
    > 一维好用, 多维需维度一致  

---

### 字符串

* 字符串字面量
  > `string literal`, 是一用一对双引号`""`括起来的字符序列
  1. 可包含转义序列
  2. 一行太长, 则可用`\`来延续字符串, 也可以直接使用`"string 1" (换行) "string 2"`, C语言会自动拼接二者
  3. 存储: C语言将字符串字面量作为数组存储, 类型`char *`, 长度为`n+1`, 末位为空字符`\0`
  4. ==操作: 允许取下标, **不允许改变字符串字面量**==
     * 因为部分编译器仅为相同字面量在内存中保存一个副本, 改变后, 所有指向该字面量的指针都会受影响 
  5. 与字符常量区别: 字符串字面量是用指针表示的, 而字符常量(如`"a"`)是用整数(ASSIC码)表示

* 字符串变量
  * 声明&初始化:
    `char str[length + 1] = "my string"`
    * 因为末位有空字符, 故长度应为字符串长度+1
    * 长度不一定一直为`length`, 只要以`\0`结尾就是结束, 即长度实际取决于空字符位置
    * 编译器会自动在末位追加`\0`, 长度不够时, 余下元素也会被初始化为`\0`
    * 若初始化时省略长度, 则编译器会自动计算, 如`char test[] = "test string"`

* 字符数组&字符指针
  * `char str[] = "string"` & `char *str = "string"`
  * 前者声明的是数组, 后者声明的是指针
  * 对于任何期望传递字符数组/指针的函数, 都能接受这两种形式声明的`str`作为参数
  * 但是二者实际存在较大差异:
    * 声明为数组时, 可以随意改动; 但声明为指针时, 不允许随意改动
    * 声明为数组时, `str`是数组名; 但声明为指针时, `str`是变量, 可指向其他字符串

* 写(输出)字符串`printf`&`puts`
  * `printf("%s", str);`
    > `printf`函数会数个输出`str`的字符, 直到遇到`\0`, 若字符串的`\0`丢失, 函数会越过字符串末尾继续输出内存内容, 直到遇到`\0`
  * `puts(str);`
    > `puts`函数只有一个参数, 在输出完之后, 会自动添加换行符

* 读(读入)字符串`scanf`&`gets`
  * `scanf("%s", str);`
    * `scanf`函数, 调用时不需要对`str`使用取址符`&`, 因为`str`为数组, 函数会默认将其视为指针处理
    * 会跳过前面的空白字符, 当遇到`换行符`/`空格符`/`制表符`会停下
  * `gets(str);`
    * `gets`函数, 会一次性读入一整行, 包括前后的空字符等, 直到遇到`换行符`
    * 并且会忽略`换行符`, 不会将其存入`str`
  * **自定义函数, 逐字符读入✔**

* 访问字符串中的字符
  ```C
  // example
  int count_str (const char * str) {
    int n = 0;
    for( ; *str != '\0'; str++){
      if( *str != ' ') {
        n ++;
      }
    }
  }
  ```
  * 因为字符串以数组方式存储, 所以可以直接取下标
  * 可用`const`来保护, 可读不可写

* C语言字符串库`string.h`
  * 引用: `#include <string.h>`
  * `strcpy`函数
    * 原型: `char *strcpy(char *s1, const char *s2);`
    * 将`s2`指向的字符串复制给`s1`指向的字符串中, 并返回`s1`
    * 通常忽略返回值 (即, 直接调用函数, 不管返回值)
    * **考虑安全**: 使用`strncpy`函数 (速度会略慢于`strcpy`), 限制`str2`的`str1`长度部分复制给`str1`; 但若`str2`的长度大于`str1`的长度, 将导致`str1`没有终止的空字符`\0`, 故最好如下两句一起使用
      * `strncpy(str1, str2, sizeof(str1) - 1);`
      * `str1[sizeof(str1)] = '\0';`
  * `strlen`函数
    * 原型: `size_t strlen(const char *s);`
    * 返回字符串`s`第一个空字符前的长度 (即终止符`\0`前), `size_t`是C语言中一种无符号整型
    * `strlen`不是返回`s`本身长度, 而是返回`s`指向的字符串的实际长度 (且不含`\0`)
  * `strcat`函数
    * 原型: `char *strcat(char *s1, const char *s2);`
    * 将字符串`s2`的内容**追加**到`s1`后面, 并返回`s1`
    * 通常忽略返回值
    * **考虑安全**: 使用`strncat`函数 (速度会略慢于`strcat`), 限制`str2`的`str1`空余长度部分追加给`str1`
      * `strncat(str1, str1, sizeof(str1)-strlen(str2)-1`
  * `strcmp`函数
    * 原型: `int strcmp(const char *s1, const char *s2);`
    * 比较字符串`s1`和`s2`, 返回一个小于/等于/大于0的值

* 字符串数组
  * `char * stringArr [] = {"string1", "string2", ..., "stringN"};`
  * 这种"参差不齐"的数组, 不会造成空间浪费
  * 访问: 访问某一字符串, 只需对`stringArr`去下标即可

* **命令行参数**
  * 为了能够够访问`命令行参数`, 需要把`main`函数定义为含有两个参数的函数
  * `int main(int argc, char *argv[])`
  * `argc`: 参数计数, 命令行参数数量 (含程序名本身)
  * `argv`: 参数向量, 命令行参数的具体指令数组

---

### TIPS

* 访问结构的成员时使用点运算符, 而通过指针访问结构的成员时, 则使用箭头运算符

* 逗号运算符`,`
    > `exp1, exp2;` 一行执行  
    > 只有一个表达式的情况下执行多条表达式  

* 空语句
    > `;`  
    > 什么也不做, 常用于编写空循环体的循环  

* 函数如何返回数组的三种方法:
  1. 函数外初始化数组, 并传入地址, 返回地址
  2. 使用静态局部变量数组(`static`)
  3. 使用结构体(结构体成员深拷贝)


---

## 数据结构


---

## LeetCode