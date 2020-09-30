// 921. 使括号有效的最少添加
// 给定一个由 '(' 和 ')' 括号组成的字符串 S，我们需要添加最少的括号（ '(' 或是 ')'，可以在任何位置），以使得到的括号字符串有效。

// 从形式上讲，只有满足下面几点之一，括号字符串才是有效的：

// 它是一个空字符串，或者
// 它可以被写成 AB （A 与 B 连接）, 其中 A 和 B 都是有效字符串，或者
// 它可以被写作 (A)，其中 A 是有效字符串。
// 给定一个括号字符串，返回为使结果字符串有效而必须添加的最少括号数。



// 示例 1：

// 输入："())"
// 输出：1
// 示例 2：

// 输入："((("
// 输出：3
// 示例 3：

// 输入："()"
// 输出：0
// 示例 4：

// 输入："()))(("
// 输出：4

// 思路：定义一个栈，遍历字符串，栈只存放'(',如果当前元素是')'，看栈是否为空，不为空，弹出一个'('来抵消掉。栈
// 为空就count++。最后有可能栈不为空，也就说'('元素多了，那么还需要加上对应的')'所需要的的值
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    if (!S.length) {
        return 0;
    }
    let count = 0;
    const stack = [];
    for (let index = 0; index < S.length; index++) {
        const element = S[index];
        if (element === '(') {
            // 当前元素是'('
            stack.push(element)
        } else {
            // 当前元素是')'

            if (stack.length) {
                // 栈不为空
                stack.pop();// 弹出一个 '('，抵消掉当前的')'
            } else {
                // 栈空
                count++
            }
        }
    }
    if (stack.length) {
        count += stack.length;
    }
    return count;
};