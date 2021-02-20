// 746. 使用最小花费爬楼梯
// 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。

// 每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。

// 请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。

 

// 示例 1：

// 输入：cost = [10, 15, 20]
// 输出：15
// 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。
//  示例 2：

// 输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// 输出：6
// 解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。
 

// 提示：

// cost 的长度范围是 [2, 1000]。
// cost[i] 将会是一个整型数据，范围为 [0, 999] 。

/**
 * @param {number[]} cost
 * @return {number}
 */
// 假设数组 cost 的长度为 n，则 n 个阶梯分别对应下标 0 到 n−1，楼层顶部对应下标 n，问题等价于计算达到下标 n 的最小花费。可以通过动态规划求解。

// 创建长度为 n+1 的数组 dp，其中 dp[i] 表示达到下标 i 的最小花费。

// 由于可以选择下标 0 或 1 作为初始阶梯，因此有 dp[0]=dp[1]=0。

// 当 2<= i <= n 时候， dp[i]=min(dp[i−1]+cost[i−1],dp[i−2]+cost[i−2])

// dp 中的每一项的值，最终得到的 dp[n] 即为达到楼层顶部的最小花费。

var minCostClimbingStairs = function(cost) {
    const len = cost.length;
    // const dp = [];
    // dp[0] = 0,dp[1] = 0;
    // for (let index = 2; index <= len; index++) {
    //     dp[index] = Math.min(dp[index-1]+cost[index-1],dp[index-2]+cost[index-2]);
    // }
    // return dp[len];
    // 思考：上面这种方法的时间复杂度是O(N)，空间复杂度是O(N),还有优化的空间么？
    // 分析后发现，dp[i]只和dp[i-2],dp[i-1]有关系，也就是当前值只和前面两个相邻的值有关，运用滚动数组思想（也就是压缩空间），是否可以用常量来优化一下？？
    let prev = 0, curr = 0,next;
    for (let index = 2; index <= len; index++) {
        next = Math.min(curr+cost[index-1],prev+cost[index-2]);
        prev = curr;
        curr = next
    }
    return curr;
};