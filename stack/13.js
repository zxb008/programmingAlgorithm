// 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

// 注意:

// num 的长度小于 10002 且 ≥ k。
// num 不会包含任何前导零。
// 示例 1 :

// 输入: num = "1432219", k = 3
// 输出: "1219"
// 解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。

// 示例 2 :

// 输入: num = "10200", k = 1
// 输出: "200"
// 解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
// 示例 3 :

// 输入: num = "10", k = 2
// 输出: "0"
// 解释: 从原数字移除所有的数字，剩余为空就是0。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/remove-k-digits
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 贪心算法，每次找到最优解
// 将当前元素和左边元素比较，如果
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    if (k <= 0) {
        return num;
    }
    const stack = [];
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        if (stack.length === 0) {
            // 栈为空
            stack.push(element)
        } else {

            // 如果栈顶元素(左边元素) > 当前元素(右边元素) 并且还需要继续删除
            while (stack.length > 0 && Number(stack[stack.length - 1]) > Number(element) && k > 0) {
                stack.pop();//删除栈顶(左边)元素
                k--;
            }
            // 如果栈顶元素(左边元素) < 当前元素(右边元素)
            stack.push(element) // 当前(右边)元素进栈
        }
    }
    while (k > 0) {
        // 这时候开始从尾部删除
        stack.pop();
        k--;
    }
    if (stack.length !== 0) {
        // 找到第一个元素不等于'0'元素的下标
        const index = stack.findIndex((item) => {
            return item !== '0'
        })
        if (index !== -1) {
            // 清除前导的0
            return stack.slice(index).join('')
        } else {
            // 说明此时的数组的元素全部为 "0" ,例如 ["0","0","0"]
            return "0";
        }
    } else {
        // 空数组返回 "0"
        return "0"
    }

};