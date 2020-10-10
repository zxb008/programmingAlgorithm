// 659. 分割数组为连续子序列
// 给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个子序列，其中每个子序列都由连续整数组成且长度至少为 3 。

// 如果可以完成上述分割，则返回 true ；否则，返回 false 。



// 示例 1：

// 输入: [1,2,3,3,4,5]
// 输出: True
// 解释:
// 你可以分割出这样两个连续子序列 : 
// 1, 2, 3
// 3, 4, 5


// 示例 2：

// 输入: [1,2,3,3,4,4,5,5]
// 输出: True
// 解释:
// 你可以分割出这样两个连续子序列 : 
// 1, 2, 3, 4, 5
// 3, 4, 5


// 示例 3：

// 输入: [1,2,3,4,4,5]
// 输出: False
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 1. nums是一个升序的数组，其中可能有重复数字
// 2. 将其分割一个或多个子序列(子序列中的元素在原数组中的相对位置不变)
// 3. 所有的子序列要连续，且长度 >= 3

// 思路:遍历nums，先找能符合要求的最长子序列，再次之，然后验证这些子序列是否符合要求。

// var isPossible = function (nums) {
//     if (nums.length < 3) {
//         return false;
//     }
//     const res = [];
//     while (nums.length) {
//         let stack = [];
//         for (let index = 0; index < nums.length; index++) {
//             const element = nums[index];
//             if (stack.length === 0 || element - stack[stack.length - 1] === 1) {
//                 stack.push(element);
//                 nums.splice(index, 1);
//                 index--;
//             } else {
//                 continue;
//             }
//         }
//         // 一个stack等价一个连续的子序列
//         res.push(stack);
//     }
//     console.log(res);
//     if (res.length) {
//         for (let index = 0; index < res.length; index++) {
//             const element = res[index];
//             if (element.length < 3) {
//                 return false;
//             }
//         }
//     } else {
//         return false;
//     }
//     return true;
// };
// console.log(isPossible([1,2,3,3,4,5]));
// 错误：
// [ [ 1, 2, 3, 4, 5 ], [ 3 ] ]
// false

// 思路分析： 这道题得采用贪心策略，就是使序列尽可能的长。蛋式这种策略好像给人一种错误的感觉，
// 比如[1,2,3,3,4,5]，如果采用此策略，将会是[1,2,3,4,5]和剩余的[3]。其实这个策略并不是这么
// 简单的，比如它扫描到’1’的时候，由于它的前一个元素’0’不存在以’0’结尾的连续子序列，所以它这
// 是向后寻找两个元素，凑成子序列[1,2,3]（这时1，2，3各被消耗了一个）。接着我们就应该访问到’3’，
// 我们又去查询以’2’结尾的有没有合法的连续序列，但是没有，所以它此时只能向后寻找两个元素，凑
// 出连续子序列[3,4,5]（3，4，5个被消耗了一次），结束访问。

// 解法：下面的解法与思路有点不同，因为往后找两个符合要求的元素比较困难（因为有可能要跳着找），具体看代码实现
var isChain = function (res, lastItem) {
    if (res.length) {
        const array = [];
        // arr数组不为空
        for (let index = 0; index < res.length; index++) {
            let itemArr = res[index];
            if (itemArr[itemArr.length - 1] + 1 === lastItem) {
                array.push({
                    index,
                    itemArr
                })
            }
        }
        if (array.length) {
            // 符合条件的index对应的itemArr可能有多个，我们需要返回长度最短的那个itemArr
            array.sort((a,b)=>{
                return a.itemArr.length - b.itemArr.length;
            })
            return array[0].index;
        }
    }
    return -1;
}

var isPossible = function (nums) {
    if (nums.length < 3) {
        return false;
    }
    const res = [];
    for (let index = 0; index < nums.length; index++) {
        let curItem = nums[index];
        let resIndex = isChain(res, curItem); // 判断是否需要构建新的子序列
        if (resIndex !== -1) {
            // 不需要构建新的子序列，找到长度最短的那个 res[resIndex]，然后将当前元素拼接上去
            res[resIndex].push(curItem);
        } else {
            // 需要构建新的子序列
            let stack = [];
            stack.push(curItem);
            res.push(stack);
        }
    }
    if (res.length) {
        for (let index = 0; index < res.length; index++) {
            const element = res[index];
            if (element.length < 3) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
};
console.log(isPossible([1, 2, 3, 3, 4, 5]));