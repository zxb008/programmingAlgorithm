// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
// 对每个孩子 i ，都有一个胃口值 gi ，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块
// 饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，这个
// 孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

// 注意：

// 你可以假设胃口值为正。
// 一个小朋友最多只能拥有一块饼干。

// 示例 1:

// 输入: [1,2,3], [1,1]

// 输出: 1

// 解释: 
// 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
// 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
// 所以你应该输出1。
// 示例 2:

// 输入: [1,2], [1,2,3]

// 输出: 2

// 解释: 
// 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
// 你拥有的饼干数量和尺寸都足以让所有孩子满足。
// 所以你应该输出2.

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// g:[1,2]
// s:[1,2]
// 那么分配方案不应该:把s[1]分给g[0]，这样会导致s[0]分配不了给g[1]，也就导致s[0]的浪费

// 正确思路： 遍历饼干，依次将规格最小的饼干分给需求最少的孩子。只有这样，满足的孩子数量才是最多的
// 所以对 g 和 s 进行从小到大的排序，然后双重循环，外面循环孩子，里面循环饼干。
var findContentChildren = function(g, s) {
    // 将g s 进行从小到大的排序
    g.sort((a,b)=>{
        return a -b;
    })
    s.sort((a,b)=>{
        return a -b;
    })
    let childrens = lastCount = 0;
    for (let i = 0; i < g.length; i++) {
        lastCount = childrens;
        for (let j = 0; j < s.length; j++) {
            if (g[i] <= s[j]) {
                childrens++;
                // 一块饼干只能给一个人，故s[j]饼干应该删除，在下次遍历中不应该出现
                s.splice(j,1);
                // 这是因为删除以后，数组变化导致遍历的不准确
                j--;
                // 对于g[i]孩子而言，已经分给其饼干(一个人最多一块饼干)，故不能继续遍历规格更大的饼干,需要结束本次循环
                break;
            } 
        }
        // 如果这次饼干循环中，childrens没有增加，说明这次循环中，剩余的饼干没有一个饼干能满足这个孩子，
        // 同时后面的孩子的需求比这个孩子的需求更大，所以剩余的饼干更满足不了后面的孩子，所以也就没有必要遍历剩下的孩子
        if (childrens === lastCount ) {
            break
        }
    }
    return childrens;
};
console.log(findContentChildren([1,2,3],[1,1]));