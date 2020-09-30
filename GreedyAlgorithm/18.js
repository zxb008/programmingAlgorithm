// 如果字符串中不含有任何 'aaa'，'bbb' 或 'ccc' 这样的字符串作为子串，那么该字符串就是一个「快乐字符串」。

// 给你三个整数 a，b ，c，请你返回 任意一个 满足下列全部条件的字符串 s：

// s 是一个尽可能长的快乐字符串。
// s 中 最多 有a 个字母 'a'、b 个字母 'b'、c 个字母 'c' 。
// s 中只含有 'a'、'b' 、'c' 三种字母。
// 如果不存在这样的字符串 s ，请返回一个空字符串 ""。

//  

// 示例 1：

// 输入：a = 1, b = 1, c = 7
// 输出："ccaccbcc"
// 解释："ccbccacc" 也是一种正确答案。
// 示例 2：

// 输入：a = 2, b = 2, c = 1
// 输出："aabbc"
// 示例 3：

// 输入：a = 7, b = 1, c = 0
// 输出："aabaa"
// 解释：这是该测试用例的唯一正确答案。
//  

// 提示：

// 0 <= a, b, c <= 100
// a + b + c > 0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-happy-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
// 思路:每轮放置字符时优先先放剩余次数最多的, 如果上次放的
// 2个字符和剩余个数最多的字符相同，则放置次多的字符

// 注意：为什么是选择剩余次数最多的那个字符来拼接？

// 原因:因为我们需要保持剩余字符串中，出现次数最多的那种字符数量不断减少，
// 防止他们在拼接的最后面堆在一起，超过3次，这样剩余的字符串就不能拼接，也就使得res不能达到最长


var longestDiverseString = function (a, b, c) {
    let res = '';
    let arr = [{ key: 'a', count: a }, { key: 'b', count: b }, { key: 'c', count: c }];
    // 仔细思考，循环结束的条件是什么？
    // 1. 恰好所有的字符都能拼接，字符串拼接完毕
    // 2. 有某个字符的次数过多，拼接到最后：res的最后两位也是这个次数最多的字符，
    // 同时剩余的字符串没有次长的字符(也就没有其他类型的字符了,说明其他的字符消耗
    // 完毕了)，那么这时候需要抛弃这个剩余次数最多的字符，并结束循环
    while (true) {
        // 过滤
        arr = arr.filter((item) => {
            return item.count > 0;
        });
        // 从大到小排序
        arr.sort((x, y) => {
            return y.count - x.count;
        });
        if (arr.length && arr[0].count > 0) {
            // arr[0].key 是当前剩余字符串中出现次数最多的字符

            if (res.length >= 2) {
                // res的长度 >= 2的时候，继续拼接的时候需要判断 "继续拼接的字符" 是否重复
                
                if (res.substring(res.length - 2) == arr[0].key.repeat(2)) {
                    // 上次放的2个字符和剩余个数最多的字符相同，则放置次多的字符
                    if (arr.length > 1) {
                        // 有次多的字符
                        res += arr[1].key;
                        arr[1].count > 0 ? arr[1].count-- : arr[1].count = 0;
                    } else {
                        // 无次多的字符，即使 arr[0].key 还有，也不能拼接，直接结束循环
                        break;
                    }
                } else {
                    // 如果不重复，直接拼接
                    res += arr[0].key;
                    arr[0].count > 0 ? arr[0].count-- : arr[0].count = 0;
                }

            } else {
                // res 的长度 < 2，时候，不需要考虑重复的问题
                res += arr[0].key;
                arr[0].count > 0 ? arr[0].count-- : arr[0].count = 0;
            }
        } else {
            // arr数组为空,说明拼接完了，结束循环
            break;
        }
    }
    return res;
};
console.log(longestDiverseString(1, 1, 7));
