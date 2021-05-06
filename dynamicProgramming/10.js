// 322. 零钱兑换
// 给定不同面额的硬币 coins 和一个总金额 amount。
// 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

// 你可以认为每种硬币的数量是无限的。



// 示例 1：
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1

// 示例 2：
// 输入：coins = [2], amount = 3
// 输出：-1

// 示例 3：
// 输入：coins = [1], amount = 0
// 输出：0

// 示例 4：
// 输入：coins = [1], amount = 1
// 输出：1

// 示例 5：
// 输入：coins = [1], amount = 2
// 输出：2


// 提示：

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// dp[i]表示最少兑换总金额i的硬币个数，dp[0] = 0, 当 coins.length === 0，dp[i] = 0;
// 思路：用j表示硬币面值，遍历coins,判断当前硬币是否应该兑换，有兑换和不兑换两种情况
// 1. i < j，金额 < 当前硬币面值，不兑换，此时，i可兑换的最少硬币数量不变，所以 dp[i] = dp[i]
// 2. i >= j， 金额 >= 当前硬币面值，兑换，dp[i] = dp[i-coins[j]] + 1
dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
var coinChange = function (coins, amount) {
    // 定义一个长度amount+1（因为返回的结果是dp[amount]），且每个元素大小是amount+1(初始值设置amount+1，因为要不断的比较更小的)
    if (!amount) {
        return 0;
    }
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0; // amount === 0
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            // 这里为啥需要针对每个金额 i ，都需要遍历 coins，元素是每个硬币的面值？
            // 因为需要尝试每个coins[j]情况下的最小dp[i],然后取所有最小中的最小的那个dp[i]
            if (i >= coins[j]) {
                dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i])
            }
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
};