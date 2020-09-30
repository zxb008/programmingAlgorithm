// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。



// 示例 1：

// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"
// 示例 2：

// 输入：s = "3[a2[c]]"
// 输出："accaccacc"
// 示例 3：

// 输入：s = "2[abc]3[cd]ef"
// 输出："abcabccdcdcdef"
// 示例 4：

// 输入：s = "abc3[cd]xyz"
// 输出："abccdcdcdxyz"
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    // const stack = [];
    // for (let index = 0; index < s.length; index++) {
    //     const element = s[index];
    //     if (stack.length === 0) {
    //         stack.push(element)
    //     } else {
    //         if (element === ']') {
    //             let startIndex = stack.lastIndexOf('[');
    //             let numEnd = startIndex - 1;
    //             let index = numEnd
    //             while ( typeof Number(stack[index]) === 'number') {
    //                 index--;
    //             }
    //             let numStart = index + 1;
    //             let num = Number(stack.slice(numStart,numEnd+1));
    //             console.log(numStart,numEnd,num);
    //             if (num > 0) {
    //                 let middleStr = stack.slice(startIndex + 1).join('');
    //                 let resStr = ''
    //                 for (let index = 0; index < num; index++) {
    //                     resStr += middleStr
    //                 }
    //                 stack.splice(startIndex - 1)
    //                 stack.push(resStr)
    //             } else {
    //                 stack.splice(startIndex - 1);
    //             }

    //         } else {
    //             stack.push(element)
    //         }
    //     }
    // }
    // return stack.join('')
    if (s.length == 0) {
        return ""
    }
    var result = "";
    var times = 0;
    var num = [],
        str = [];
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            times = times * 10 + parseInt(s[i]);
         
        } else if (s[i] == '[') {
            num.push(times);
            str.push(result);
            times = 0;
            result = "";
        } else if (s[i] == ']') {
            let topTimes = num.pop();
            result = str.pop() + result.repeat(topTimes)
        } else {
            //普通字符
            result += s[i];
        }
    }
    return result;
};
console.log(decodeString("100[leetcode]"));