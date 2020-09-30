
/**
 * @param {string} s
 * @return {number}
 */
// 输入：s = "RLRRLLRLRL"
// 输出：4
// 解释：s 可以分割为 "RL", "RRLL", "RL", "RL", 每个子字符串中都包含相同数量的 'L' 和 'R'。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/split-a-string-in-balanced-strings
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 1. 利用栈，
// 定义一个计数变量count = 0，循环遍历字符串，
// 栈空，当前元素进栈
// 栈不为空，如果当前元素和栈顶元素一样，那么当前元素进栈
// 栈不为空，如果当前元素和栈顶元素不一样，那么栈顶元素出栈，并同时检查栈是否为空，如果为空，那么计数变量count++；（意不意外，惊不惊喜，是不是觉得很巧妙）


// 2. 
// 定义一个计数变量count = 0，一个L的计数变量Lcount，一个R的计数变量Rcount，循环遍历字符串，
// 在每次循环过程中，如果当前元素 === 'L',Lcount++; === 'R'; 如果当前元素 === 'R',Rcount++;
// 同时每次循环需要比较，如果 Lcount === Rcount ，那么说明可以构建一个平衡字符串，count++
var balancedStringSplit = function (s) {
    let Lcount = 0;
    let Rcount = 0;
    let count = 0;
    for (let index = 0; index < s.length; index++) {
        if (s[index] === 'L') {
            Lcount++
        } else {
            Rcount++
        }
        if (Lcount === Rcount) {
            count++
        }
    }
    return count;
};