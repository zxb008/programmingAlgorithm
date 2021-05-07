// 486. 预测赢家
// 给定一个表示分数的非负整数数组。 玩家 1 从数组任意一端拿取一个分数，随后玩家 2 继续从剩余数组任意一端拿取分数，然后玩家 1 拿，…… 。
// 每次一个玩家只能拿取一个分数，分数被拿取之后不再可取。直到没有剩余分数可取时游戏结束。最终获得分数总和最多的玩家获胜。
// 给定一个表示分数的数组，预测玩家1是否会成为赢家。你可以假设每个玩家的玩法都会使他的分数最大化。



// 示例 1：
// 输入：[1, 5, 2]
// 输出：False
// 解释：一开始，玩家1可以从1和2中进行选择。
// 如果他选择 2（或者 1 ），那么玩家 2 可以从 1（或者 2 ）和 5 中进行选择。如果玩家 2 选择了 5 ，那么玩家 1 则只剩下 1（或者 2 ）可选。
// 所以，玩家 1 的最终分数为 1 + 2 = 3，而玩家 2 为 5 。
// 因此，玩家 1 永远不会成为赢家，返回 False 。

// 示例 2：
// 输入：[1, 5, 233, 7]
// 输出：True
// 解释：玩家 1 一开始选择 1 。然后玩家 2 必须从 5 和 7 中进行选择。无论玩家 2 选择了哪个，玩家 1 都可以选择 233 。
//      最终，玩家 1（234 分）比玩家 2（12 分）获得更多的分数，所以返回 True，表示玩家 1 可以成为赢家。


// 提示：

// 1 <= 给定的数组长度 <= 20.
// 数组里所有分数都为非负数且不会大于 10000000 。
// 如果最终两个玩家的分数相等，那么玩家 1 仍为赢家。


/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 1. 因为两个玩家不断的交替选择分数，是不是可以用递归？(+备忘录思路)
// 怎么计算呢？
// 当前选择的分数，减去，往后对手赢过自己的分数（对剩余数组递归）。因为有两端可选择，所以差值有两个，取较大的判断是否>=0。

var PredictTheWinner = function (nums) {
    if (nums.length % 2 === 0 || nums.length <= 2) {
        // 对于nums长度为偶数而言，那么玩家1一定会赢，因为假设玩家1输了，那么玩家1作为先手，可以调换操作顺序，将玩家2得到的分数变为自己的，玩家1获得分数跟高，仍然获胜
        // 对于长度小于2的nums，一定是玩家1会赢
        return true;
    }
    //递归函数定义：返回当前做选择的玩家，基于当前区间[i,j]，赢过对手的分数。
    // function helper(l, r, nums) {
    //     // 递归结束条件,剩下最后一个元素，当前玩家只能取这个元素
    //     if (l === r) {
    //         return nums[l];
    //     }
    //     // 怎么计算呢？
    //     // 当前选择的分数，减去，往后对手赢过自己的分数（对剩余数组递归）。因为有两端可选择，所以差值有两个，取较大的判断是否>=0。
    //     const leftNum = nums[l] - helper(l + 1, r, nums);// 选择左端，获得nums[l]，之后输掉helper(l+1,r)分
    //     const rightNum = nums[r] - helper(l, r - 1, nums);// 选择右端，获得nums[r]，之后输掉helper(l,r-1)分
    //     return Math.max(leftNum, rightNum);// 返回较大者，即在[i,j]数组游戏中胜过对方的分数
    // }
    // return helper(0, nums.length - 1, nums) >= 0;

    // 记忆化递归
    // const map = new Array(nums.length);
    // for (let i = 0; i < map.length; i++) {
    //     map[i] = new Array(nums.length);
    // }
    // function helper(l, r, nums) {
    //     // 递归结束条件,剩下最后一个元素，当前玩家只能取这个元素
    //     if (l === r) {
    //         return nums[l];
    //     }
    //     if (map[l][r]) {
    //         return map[l][r];
    //     }
    //     // 怎么计算呢？
    //     // 当前选择的分数，减去，往后对手赢过自己的分数（对剩余数组递归）。因为有两端可选择，所以差值有两个，取较大的判断是否>=0。
    //     const leftNum = nums[l] - helper(l + 1, r, nums);// 选择左端，获得nums[l]，之后输掉helper(l+1,r)分
    //     const rightNum = nums[r] - helper(l, r - 1, nums);// 选择右端，获得nums[r]，之后输掉helper(l,r-1)分
    //     map[l][r] = Math.max(leftNum, rightNum);
    //     return map[l][r];// 返回较大者，即在[i,j]数组游戏中胜过对方的分数
    // }
    // return helper(0, nums.length - 1, nums) >= 0;

    // 比照递归函数的定义，dp[i][j]: 当前玩家在数组[i:j]中先手，所赢过对方的分数。

    // 比照递归的终止条件，有 base case：当i == j时，dp[i][j] = nums[i]。

    // 比照递归函数的返回值：max(nums[i] - helper(i+1, j), nums[j] - helper(i, j-1))，有状态转移方程：dp[i][j] = max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])

    // 注意，要满足i <= j，所以只用填半张表。
    const len = nums.length;
    const dp = new Array(len);  // initialize dp array
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len);
    }
    for (let i = 0; i < len; i++) {  // base case 
        dp[i][i] = nums[i];
    }
    // iteration
    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            const pickI = nums[i] - dp[i + 1][j];
            const pickJ = nums[j] - dp[i][j - 1];
            dp[i][j] = Math.max(pickI, pickJ);
        }
    }
    return dp[0][len - 1] >= 0;

};

// var PredictTheWinner = function (nums) {
//     if (nums.length % 2 === 0 || nums.length <= 2) {
//         // 对于nums长度为偶数而言，那么玩家1一定会赢，因为假设玩家1输了，那么玩家1作为先手，可以调换操作顺序，将玩家2得到的分数变为自己的，玩家1获得分数跟高，仍然获胜
//         // 对于长度小于2的nums，一定是玩家1会赢
//         return true;
//     }
//     function getSum(nums, i, j, status) {
//       if (i === j) return nums[i] * status
//       // 选择最前
//       let x = nums[i] * status + getSum(nums, i + 1, j, -status),
//         // 选择选择最后
//         y = nums[j] * status + getSum(nums, i, j - 1, -status)
//       // 取最大值的逻辑分回合，玩家1均为正数去最大值，玩家2均为负数取最小值
//       return status === 1 ? Math.max(x, y) : Math.min(x, y)
//     }

//     return getSum(nums, 0, nums.length - 1, 1) >= 0
//   }
