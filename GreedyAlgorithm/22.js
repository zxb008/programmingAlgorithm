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
// 思路: 找到字符串s能构成的最少回文串的个数left，和最多的回文串的个数right，然后判断k是否在left和right中间。
// 1. right的值容易算出，就是字符串s的长度，也就是每个字符作为一个回文串
// 2. 关键是如何算出left ？？
// 回文串有两种: 第一：abcba，长度为奇数；第二：abba，长度为偶数
// 如果s字符串中有p个字符出现奇数次，q个字符出现了偶数次，那么s能构成最小回文串的数量就是p，因为每一种出现了奇数
// 次的字符都必须放在不同的回文串中。特别地，如果 p=0（就是没有奇数次的字符），那么最少构造的回文串个数为 1(所有的字符都是偶数次，恰好构成一个回文串)。left = max（p，1）
// 最后有一个问题？为什么k在left和right中间，就说明一定能形成k个回文串。

var canConstruct = function (s, k) {
    const map = new Map();
    const right = s.length;
    let even = 0, odd = 0, left = 1;
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (map.has(element)) {
            let count = map.get(element);
            count++;
            map.set(element, count)
        } else {
            map.set(element, 1)
        }
    }
    // map 中存着每个元素的的次数
    map.forEach(function (value, key, map) {
        if (value % 2 === 0) {
            even++
        } else {
            odd++
        }
    });
    if (odd > 1) {
        left = odd;
    }
    if (k >= left && k <= right) {
        return true;
    }else{
        return false;
    }
};