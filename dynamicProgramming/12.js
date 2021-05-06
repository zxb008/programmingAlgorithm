
// 309. 最佳买卖股票时机含冷冻期
// 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

// 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// 示例:

// 输入: [1,2,3,0,2]
// 输出: 3 
// 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
/**
 * @param {number[]} prices
 * @return {number}
 */
// 思路：
// 1. 在某一天，我们会有三种状态中的一种，不持股(0)，持股(1),冷冻期(2);

// 我们定义 dp[i][j]表示在 0 ~ i 天内，处于 j(j===0;j===1;j===2) 状态的最大收益
// 那么我们输出应该是，在最后一天时，取不持股状态和冷冻期状态的最大值 const len = prices.length; Math.max(dp[len-1][0], dp[len-1][2])  
// 初始化：dp[0][0] = 0;dp[0][1] = -prices[0];dp[0][2] = 0;
 var maxProfit = function(prices) {
     const len = prices.length;
     if (len <= 1) {
         return 0;
     }
     const dp = new Array(len).fill(0).map(item=>new Array(3).fill(0));
     dp[0][0] = 0;//  // 第一天的不持股
     dp[0][1] = -prices[0]; // 第一天的持股
     dp[0][2] = 0; // 第一天的冷冻期
     for (let index = 1; index < prices.length; index++) {
         const price = prices[index];
         dp[index][0] = Math.max(dp[index-1][0],dp[index-1][1] + price); // 当前的不持股 = Max（前一天的不持股，前一天的持股+当天的价格=>卖掉）
         dp[index][1] = Math.max(dp[index-1][1],dp[index-1][2] - price); // 当前的持股 = Max（前一天的持股，前一天的冷冻期 - 当天的价格=>买入）
         dp[index][2] = dp[index-1][0]; // 当天的冷冻期 = 前一天的不持股;
        
     }
     return  Math.max(dp[len-1][0], dp[len-1][2]);
};
console.log(maxProfit([1,2,3,0,2]));