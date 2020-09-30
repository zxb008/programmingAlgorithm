// 984. 不含 AAA 或 BBB 的字符串
// 给定两个整数 A 和 B，返回任意字符串 S，要求满足：

// S 的长度为 A + B，且正好包含 A 个 'a' 字母与 B 个 'b' 字母；
// 子串 'aaa' 没有出现在 S 中；
// 子串 'bbb' 没有出现在 S 中。


// 示例 1：

// 输入：A = 1, B = 2
// 输出："abb"
// 解释："abb", "bab" 和 "bba" 都是正确答案。
// 示例 2：

// 输入：A = 4, B = 1
// 输出："aabaa"

// 思路:
// A > B,对于A而言，'aa'作为一个单元放入数组(因为A有可能是奇数，故有可能有多余的'a'，多余的'a'照样push进数组中),
// B而言，直接'b'作为一个单元放入数组。
// 定义一个res = [],然后：先将A中的一个单元push进res，在将B中的一个单元push进res，如此循环此操作，知道两个数组都为空。
// B > A 时候，就刚好相反。

// var strWithout3a3b = function (A, B) {
//     if (A === B) {
//         let res = '';
//         for (let index = 0; index < A ; index++) {
//            res += 'ab'
//         }
//         return res;
//     }    
//     let a = [], b = [];
//     if (A > B) {
//         // a 数组需要拆分为'aa'
//         if (A % 2 === 0) {
//             // A 是偶数
//             for (let index = 0; index < A / 2; index++) {
//                 a.push('aa');
//             }
//         } else {
//             if (A !== 1) {
//                 for (let index = 0; index < (A - 1) / 2; index++) {
//                     a.push('aa');
//                 }
//             }
//             a.push('a');
//         }
//         // b 数组无需拆分成 'bb'
//         for (let index = 0; index < B; index++) {
//             b.push('b');
//         }
//     } else {
//         // b 数组需要拆分为'bb'
//         if (B % 2 === 0) {
//             // B 是偶数
//             for (let index = 0; index < B / 2; index++) {
//                 b.push('bb');
//             }
//         } else {
//             if (B !== 1) {
//                 for (let index = 0; index < (B - 1) / 2; index++) {
//                     b.push('bb');
//                 }
//             }
//             b.push('b');
//         }
//         // a 数组无需拆分成 'aa'
//         for (let index = 0; index < A; index++) {
//             a.push('a');
//         }
//     }
//     const res = [];
//     while (a.length || b.length) {
//         if (A > B) {
//             if (a[0]) {
//                 res.push(a.shift())
//             }
//             if (b[0]) {
//                 res.push(b.shift())
//             }
//         } else {
//             if (b[0]) {
//                 res.push(b.shift())
//             }
//             if (a[0]) {
//                 res.push(a.shift())
//             }
//         }
//     }
//     return res.join('');
// };

// 会发现上面的这种思路是有问题的，下面的思路是正确的

// 我们定义 A, B：待写的 'a' 与 'b' 的数量。

// 在允许情况下，先写入当前字母数量多的字母x。（否则，会出现大量字母连在一起的情况，不符合题目要求）
// 如果前2个字母已经是x的情况下，则写入另一个字母。

// 敲重点："写入当前字母数量多的字母x";
// x 并不是第一次比较 A 和 B 就可确定的，是通过每次比较剩余待写字母中那个数量多确定的，
// 但是两种剩余待写字母数量是不断变化的，故 x 是动态的（上面的思路错误就是在于一开始就确定了 x ，然后 x 一直没有变化）
// （假如 A > B, 如果 x = a 一开始就确定不变,随着写入，在剩余的待写字母中反而有可能出现 b 的数量 超过 a，
// 在写入的最后，就有可能出现 b 字母连在一起的现象）

var strWithout3a3b = function (A, B) {
    let res = '';
    let acount = 0, bcount = 0;
    const count = A + B;
    while (res.length < count) {
        if (A > B && acount < 2 || A <= B && bcount == 2 ) {
            res += 'a';
            A--;
            acount++;
            bcount = 0;
        } else {
            res += 'b';
            B--;
            acount = 0;
            bcount++;
        }
    }
    return res;
}

console.log(strWithout3a3b(4,1));