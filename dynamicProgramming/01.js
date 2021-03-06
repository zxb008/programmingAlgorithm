// 53. 最大子序和
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 

// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [0]
// 输出：0
// 示例 4：

// 输入：nums = [-1]
// 输出：-1
// 示例 5：

// 输入：nums = [-100000]
// 输出：-100000
 

// 提示：

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105
 

// 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
/**
 * @param {number[]} nums
 * @return {number}
 */

 // 动态规划的三要素：最优子结构  边界  状态转移公式
 // 动态规划两种解决方法：1.递归+map 2.迭代形式
 // 思考：在本题中，假设用f(i)代表以第i个数结尾的「连续子数组的最大和」，那么得到状态转移公式：f(i) = max {f(i-1)+num[i],num[i]},然后边界就是 f(0) = num[0]
var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        // pre 就是在每次遍历的时候，以该下标为结束点的数组而言的f(i)
        pre = Math.max(pre + x, x);
        // 这一步是为了得到所有的f(i)中的最大的f(i)
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));// 6