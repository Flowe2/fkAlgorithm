/* # 题面
/  字符串 S 由小写字母组成。
/  我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
/  返回一个表示每个字符串片段的长度的列表。
/  # 示例：
/  输入：S = "ababcbacadefegdehijhklij"
/  输出：[9,7,8]
/  解释：
/  划分结果为 "ababcbaca", "defegde", "hijhklij"。
/  每个字母最多出现在一个片段中。
/  像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let noRep = "";
    let indexPair = [];
    let res = [];

    // 去重
    var len = S.length;
    for (var i=0; i<len; i++){
        if(noRep.indexOf(S[i]) == -1){
            noRep = noRep + S[i];
        }
    }
    
    // 获得所有字母出现的首/尾序号对
    for (var i = 0; i < noRep.length; i++) {
        indexPair[i] = [S.indexOf(noRep[i]), S.lastIndexOf(noRep[i])];
    }

    // 分段
    var i = 0;
    var tempStart = indexPair[i][0];
    var tempEnd = indexPair[i][1];
    while(i<indexPair.length){
        for (i; i<indexPair.length; i++){
            if (indexPair[i][0] < tempEnd && indexPair[i][1] > tempEnd){
                tempEnd = indexPair[i][1];
                // console.log("if" + tempStart + " " + tempEnd);
            }
            else if (indexPair[i][0] > tempEnd) {
                res.push(tempEnd - tempStart + 1); 
                tempStart = indexPair[i][0];
                tempEnd = indexPair[i][1];
                // console.log(tempStart + " " + tempEnd);
                i = i+1;
                break;
            }
            else { 
                // console.log("else" + tempStart + " " + tempEnd);
                continue;
            }
        }
    }
    res.push(tempEnd - tempStart + 1); 

    return res;
};



/* # 官方题解
var partitionLabels = function(S) {
    const last = new Array(26);
    const length = S.length;
    const codePointA = 'a'.codePointAt(0);
    for (let i = 0; i < length; i++) {
        last[S.codePointAt(i) - codePointA] = i;
    }
    const partition = [];
    let start = 0, end = 0;
    for (let i = 0; i < length; i++) {
        end = Math.max(end, last[S.codePointAt(i) - codePointA]);
        if (i == end) {
            partition.push(end - start + 1);
            start = end + 1;
        }
    }
    return partition;
};
*/