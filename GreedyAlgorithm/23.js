// 1081. 不同字符的最小子序列
// 返回字符串 text 中按字典序排列最小的子序列，该子序列包含 text 中所有不同字符一次。



// 示例 1：

// 输入："cdadabcc"
// 输出："adbc"
// 示例 2：

// 输入："abcd"
// 输出："abcd"
// 示例 3：

// 输入："ecbacba"
// 输出："eacb"
// 示例 4：

// 输入："leetcode"
// 输出："letcod"
/**
 * @param {string} s
 * @return {string}
 */
// 解释：1.子序列（返回的字符串在原来的字符串中的相对位置不能变） 2. 字典序排序最小 3. text中所有的字符只出现一次，不重不漏每一个字符
// 思路：构建一个栈，遍历字符串s。
// 1. 栈空入栈。
// 2. 栈不为空，比较当前元素和栈顶元素：
//    一，如果当前元素 > 栈顶元素,入栈；
//    二，如果当前元素 < 栈顶元素 并且剩余遍历的字符串中还存在栈顶元素，那么循环的不断弹出栈顶元素（因为这样可以将
//       字典序更小的字符放在前面,从而保证整体的字典序达到最小，同时保证是子序列，不漏不重），最后入栈
//    三，如果当前元素 < 栈顶元素 并且剩余遍历的字符串中不存在栈顶元素，那么只能直接入栈（因为要保证是子序列，并不漏不重情况下，字典序最小）
var smallestSubsequence = function (s) {
    s = s.split("");
    const stack = [];
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (stack.length === 0) {
            // 栈空入栈
            stack.push(element)
        } else {
            if (!stack.includes(element)) {
                // 栈中没有当前元素，避免重复
                if (element > stack[stack.length - 1]) {
                    // 当前元素 > 栈顶元素，入栈；
                    stack.push(element)
                } else {
                    // 当前元素 < 栈顶元素；
                    while (stack.length) {
                        if (element < stack[stack.length - 1] && s.slice(index).includes(stack[stack.length - 1])) {
                            // 后续字符串仍存在栈顶元素
                            stack.pop();
                        } else {
                            //  后续字符串不存在栈顶元素
                            stack.push(element);
                            break;
                        }
                    }
                    if (stack.length === 0) {
                        // 有可能弹出栈顶元素弹空了，所以当前元素入栈
                        stack.push(element)
                    }
                }
            }
        }
    }
    return stack.join("");
};
console.log(smallestSubsequence("cbaacabcaaccaacababa"));

