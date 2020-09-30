// 给你一个字符串 s 和一个整数 k 。请你用 s 字符串中 所有字符 构造 k 个非空 回文串 。

// 如果你可以用 s 中所有字符构造 k 个回文字符串，那么请你返回 True ，否则返回 False 。

//  

// 示例 1：

// 输入：s = "annabelle", k = 2
// 输出：true
// 解释：可以用 s 中所有字符构造 2 个回文字符串。
// 一些可行的构造方案包括："anna" + "elble"，"anbna" + "elle"，"anellena" + "b"
// 示例 2：

// 输入：s = "leetcode", k = 3
// 输出：false
// 解释：无法用 s 中所有字符构造 3 个回文串。
// 示例 3：

// 输入：s = "true", k = 4
// 输出：true
// 解释：唯一可行的方案是让 s 中每个字符单独构成一个字符串。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/construct-k-palindrome-strings
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    const map = new Map();
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (map.has(element)) {
            let count = map.get(element);
            count++;
            map.set(element,count)
        } else {
            map.set(element,1)
        }
    }
    
};