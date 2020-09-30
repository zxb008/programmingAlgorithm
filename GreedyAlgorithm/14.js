// 给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个子序列，其中每个子序列都由连续整数组成且长度至少为 3 。

// 如果可以完成上述分割，则返回 true ；否则，返回 false 。

//  

// 示例 1：

// 输入: [1,2,3,3,4,5]
// 输出: True
// 解释:
// 你可以分割出这样两个连续子序列 : 
// 1, 2, 3
// 3, 4, 5
//  

// 示例 2：

// 输入: [1,2,3,3,4,4,5,5]
// 输出: True
// 解释:
// 你可以分割出这样两个连续子序列 : 
// 1, 2, 3, 4, 5
// 3, 4, 5
//  

// 示例 3：

// 输入: [1,2,3,4,4,5]
// 输出: False


/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 条件:
// nums 是一个递增的连续整数数组，相邻元素有可能重复
// 要求:
// 1. 分割成为一个或者多个子序列
// 2. 子序列为连续整数组成
// 3. 子序列的长度 >= 3
 
var isPossible = function(nums) {
    if ( nums.length < 3) {
        return false;
    }
    const stack = [];
    const repeatArr = [];
    for (let index = 0; index < nums.length; index++) {
        let element = nums[index]
        if (!stack.length) {
            stack.push(element)
        }else{
            if (stack[stack.length-1] === element) {
                repeatArr.push(element)
            } else {
                
            }
        }
    }
};