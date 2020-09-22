/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    for (let index = 0; index < s.length; index++) {
        let currentEle = s[index]
        if (stack.length === 0) {
            // 栈为空，入栈
            stack.push(currentEle);
        } else {
            // 栈不为空
            let str = stack[stack.length - 1] + currentEle;
            if (str === '()' || str === '[]' ||str === '{}') {
                stack.pop();
            } else {
                stack.push(currentEle);
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false
    }
};