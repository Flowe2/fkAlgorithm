const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const lines = [];
let = h1, m1, h2, m2, n;
rl.on("line", (line) => {
    lines.push(line);
    if (lines.length == 3) {
        [h1, m1] = lines[0].split("").map(Number);
        [h2, m2] = lines[1].split("").map(Number);
        n = lines[2] - 0;
    }

    if (n == 6 && lines.length == n + 3) {
        const idcs = lines.slice(3).map((line) = line.split("").map(Number));
        getResult(h1, m1, h2, m2, idcs);
        lines.length = 0;
    }
});

// h1 当前时间的小时数
// m1 当前时间的分钟数
// h2 指定完成核算时间的小时数
// m2 指定完成核算时间的分钟数
// idcs [[核酸点的ID值，核酸检测点距离张三的距离, 核酸检测点当前检测的人数], ...]
function getResult(h1, m1, h2, m2, idcs) {
    const start = h1 * 60 + m1;
    const end = h2 * 60 + m2;
    const ans = idcs
        .map((idc) => {
            let [id, distance, count] = idc;
            const money = distance * 10;
            let road = distance * 10; //花在路上的时间
            let arrived = start + road;//到达核酸检测点的时海
            //如果在8:80之前就赶到了,那么其实要等待到8:00才能排队,这皇其实花费的时间应该包括等
            if (arrived < 8 * 60) {
                arrived = 8 * 60;
                road = arrived - start;
            }
            //[出发时间,到达时间]
            // 和[8:00, 10:00]的交集,每分钟净增2人
            const add1 = getIntersection([start, arrived], [8 * 60, 10 * 60]);
            if (add1 !== false) {
                count += 2 * addl;
            }
            // 和[10:00, 12:00]的交集,每分钟净减l人
            const min1 = getIntersection([start, arrived], [10 * 60, 12 * 60]);
            if (min1 !== false) {
                count -= min1;
                count = Math.max(0, count); //注意至多减到
            }
            // 和[12: 00, 14: 00]的交集, 每分钟净增9人
            const add2 = getIntersection([start, arrived], [12 * 60, 14 * 60]);
            if (add2 !== false) {
                count = 9 * add2;
            }
            // [14: 00, 20: 00]的交集, 每分钟净减1人
            const min2 = getIntersection([start, arrived], [14 * 60, 20 * 60]);
            if (min2 !== false) {
                count -= min2;
                count = Math.max(0, count);//注意至多减到
            }
            return [id, count + road, money];
        })
        .filter(([id, real_end, money]) => real_end <= end)
        .sort((a, b) =>
            a[1] != b[1] ? a[1] - b[1] : a[2] != b[2] ? a[2] - b[2] : a[0] - b[0]
        );
    console.log(ans.length);
    ans.forEach((irm) => {
        console.log(irm.join(" "));
    });
};


//茨取交某长度，如果没有交集返回叶行L5 
function getIntersection(ran1, ran2) {
    const [s1, e1] = ran1;
    const [s2, e2] = ran2;
    if (s1 < s2) {
        if (s2 > e1) return false;
        else return e1 - s2;
    } else if (s1 > s2) {
        if (s1 > e2) return false;
        else return e2 - s1;
    } else {
        return Math.min(el, e2) - s1;
    }
}