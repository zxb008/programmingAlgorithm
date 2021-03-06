// 198. 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。



// 示例 1：

// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 2：

// 输入：[2,7,9,3,1]
// 输出：12
// 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。


// 提示：

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */
// 解释：定义dp[i]表示前 i 个nums中偷到的最大金额数，那么有两种方法
// 1. 最后一个房子不偷，dp[i-1]
// 2. 最后一个房子偷，dp[i - 1] + nums[i]
//  所以，dp 方程 dp[i] = max(dp[i-2]+nums[i], dp[i-1])
var rob = function (nums) {
    if (!nums.length) {
        // 0 个房间
        return 0;
    }
    if (nums.length === 1) {
        // 1 个房间
        return nums[0];
    }
    const dp = [];
    dp[0] = 0; // 0个房间
    dp[1] = nums[0]; // 1 一个房间
    for (let index = 2; index <= nums.length; index++) {
        dp[index] = Math.max(dp[index - 1], dp[index - 2] + nums[index-1]);
    }
    return dp[nums.length];
};