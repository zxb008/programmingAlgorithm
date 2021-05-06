// 面试题 17.16. 按摩师
// 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，
// 因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

// 注意：本题相对原题稍作改动

// 示例 1：
// 输入： [1,2,3,1]
// 输出： 4
// 解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。

// 示例 2：
// 输入： [2,7,9,3,1]
// 输出： 12
// 解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。

// 示例 3：
// 输入： [2,1,4,5,3,1,1,3]
// 输出： 12
// 解释： 选择 1 号预约、 3 号预约、 5 号预约和 8 号预约，总时长 = 2 + 4 + 3 + 3 = 12。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 用dp[i][j]表示 0 ~ i 内，总预约最长的时间，j = 0 表示不接受预约，j = 1 表示接口预约
var massage = function (nums) {
    const len = nums.length;
    if (!len) {
        return 0;
    }
    const dp = new Array(len).fill(0).map(item => new Array(2).fill(0));
    dp[0][0] = 0; // 第一天不接受预约的总时间 = 0;
    dp[0][1] = nums[0]; // 第一天接受预约的总时间 = nums[0];
    for (let index = 1; index < nums.length; index++) {
        dp[index][0] = Math.max(dp[index-1][0], dp[index-1][1])  ; // 当前的不接受预约总时间 = Max(前一天不接受预约总时间 , 前一天接受预约总时间)
        dp[index][1] = dp[index-1][0] + nums[index]; 
    }
    return Math.max(dp[len-1][0],dp[len-1][1]); 
};
console.log(massage([]));