// 62. 不同路径
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？



// 示例 1：
// 输入：m = 3, n = 7
// 输出：28

// 示例 2：
// 输入：m = 3, n = 2
// 输出：3
// 解释：
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向下

// 示例 3：
// 输入：m = 7, n = 3
// 输出：28

// 示例 4：
// 输入：m = 3, n = 3
// 输出：6


// 提示：

// 1 <= m, n <= 100
// 题目数据保证答案小于等于 2 * 109

// 排列组合:
// 竖着要走 m-1；
// 横着要走 n-1；
// 所以一定会走 m+n-2
// 然后我们利用组合的思想思考一下，发现从 m+n-2 中 选择 n-1 有多少种选择，那么就会有多少种走法 C （n-1，m+n-2）


// 动态规划:
// 我们用 f(i,j) 表示从左上角走到 (i, j) 的路径数量，其中 i 和 j 的范围分别是 [0,m) 和 [0,n)。
// 由于我们每一步只能从向下或者向右移动一步，因此要想走到 (i,j)，如果向下走一步，那么会从 (i−1,j) 走过来；如果向右走一步，那么会从 (i,j−1) 走过来。因此我们可以写出动态规划转移方程：
// f(i, j) = f(i-1, j) + f(i, j-1)
// 需要注意的是，如果 i=0，那么 f(i−1,j) 并不是一个满足要求的状态，我们需要忽略这一项；同理，如果 j=0，那么 f(i,j−1) 并不是一个满足要求的状态，我们需要忽略这一项。
// 初始条件为 f(0,0)=1，即从左上角走到左上角有一种方法。
// 最终的答案即为 f(m−1,n−1)。

// 思路：从左上角到右下角的过程中，我们需要移动 m+n−2 次，其中有 m−1 次向下移动，n-1n−1 次向右移动。因此路径的总数，
// 就等于从 m+n−2 次移动中选择 m−1 次向下移动的方案数，即组合数：


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function factorial(m,n){
    var num = 1;
    var count = 0;
    for(var i = m;i > 0;i--){
        if(count == n){//当循环次数等于指定的相乘个数时，即跳出for循环
            break;
        }
        num = num * i;
        count++;
    }
    return num;
}
var uniquePaths = function (m, n) {
    // 排列组合方法
    // return factorial(m+n-2,n-1)/factorial(n-1,n-1);
    // 动态规划

    const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // 假设横着不动，只往下走，无论要走到那一格，都只有一种方案
    for (let i = 0; i < m; i++) {
        f[i][0] = 1;
    }
    // 假设竖着不动，只往右走，无论要走到那一格，也都只有一种方案
    for (let j = 0; j < n; j++) {
        f[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            f[i][j] = f[i - 1][j] + f[i][j - 1];
        }
    }
    return f[m - 1][n - 1];
}
