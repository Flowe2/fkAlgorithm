# 色差小游戏 - JS脚本

> @*`Flowe2`*
> @*timestamp*: 2021-07-27
  
### 前言(fei hua)

刷b站偶然在一个推荐有趣网站的视频里发现了本文主角 [色差小游戏][gameUrl]

**玩法很简单, 点击开始后, 找到并点击与其他方块颜色不同的方块, 限时`60s`**

我眼睛对色差的辨识度比较一般, 玩了半天很多把, 平均`30+`, 最高纪录`43`

与群友们分享这个游戏后, 大家也都玩儿的不亦乐乎

然后当然避免不了一番攀比(~~虽然我的43纪录似乎已经能霸占本群榜首了~~), 然而群友发来了一张其朋友的记录, 截图上是`47关, 可以去"最强大脑"了`

这该死的好胜心……想了想, `40+`已经是自己的极限了, 再玩儿应该也不能有所突破, 于是动起了歪脑筋😁

游戏逻辑再简单不过, 全程只需要点击, `F12`一看, 游戏应该也是作者随手写着给大家玩儿的, `rgb(xx, xx, xx)`直接在每个方块`span`的`style`中, 那事情就太简单了

### 代码 - Figure Out

* 直接附上原生`JS`代码

```JavaScript
    // 每关的点击函数
    function cheat () {
        let element = document.getElementById("box").getElementsByTagName("span");
        let target = 0;
        let commonColor = element[0].style.backgroundColor;
        if (element[1].style.backgroundColor != commonColor){
            if (element[2].style.backgroundColor != commonColor){   
                commonColor = element[1].style.backgroundColor;
                // cilck, target = 0
                element[target].click();
            } else {
                // click, target = 1;
                target = 1;
                element[target].click();
            }
        } else if (element[2].style.backgroundColor != commonColor) {
            // click, target = 2;
            target = 2;
            element[target].click();
        }

        for(let i=3; i<element.length; i++) {
            if (element[i].style.backgroundColor != commonColor){
                target = i;
                break;
            }
        }
        // click, target = i
        element[target].click();
    }

    // 开始函数
    // setInterval version, dely - ms (suggest-min: 100)
    function start (dely) {
        // 点击开始
        document.getElementById("index").getElementsByTagName("button")[0].click();
        // 循环
        let myClock = setInterval(() => {
            cheat()
            if(document.getElementsByClassName("time")[0].innerText == 1) {
                clearInterval(myClock);
            }
        }, dely);
    }

    start(500); // 500ms一次点击能有110+的成绩: "对色差具有超凡的能力！作弊？？"
```

### 小结

没什么好小结的, 简单的用`JS`查元素标签, 简单的用`JS`模拟点击而已

非要说的话……`setInterval()`真好用😄 (`clearInterval`别忘了)

除了用`Timer`来解决, 似乎还可以用标签`Observer`, 没记错的话有一个`MutationObserver`, 可以用来监听标签属性变化, 对这个游戏而言, 点击后监听标签`class`变化同时触发点击即可

最后, 设置`dely`参数为`100`, 然后静静等待游戏结束, 再把`558`的成绩截图往群里一扔, 装完B就跑

[gameUrl]: http://www.cuishuai.cc/game/