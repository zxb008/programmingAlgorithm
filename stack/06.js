// 根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。


// 先说单调栈，
// 单调栈就是栈内元素保持一定单调性（单调递增或单调递减）的栈。这里的单调递增或递减是指的从栈顶到栈底单调递增或递减。既然是栈，就满足后进先出的特点。
// 例如，现在有一个数组 [3, 4, 2, 6, 4, 5, 2, 3]，从左到右依次入栈，单调递增栈的实现。
    // 单调递增栈的实现
    // let arr = [3, 4, 2, 6, 4, 5, 2, 3]
    // let res = []

    // for (let i = 0; i < arr.length; i++) {
    //     while (res.length && res[res.length - 1] < arr[i]) {
    //         res.pop()
    //     }
    //     res.push(arr[i])
    // }
    // console.log(res)   // [6, 5, 3]

// 将破坏栈单调性的元素都出栈，结果从栈顶到栈底单调递增或者递减。
// 了解了单调栈之后，再来看这道题。

// 维护一个单调递增栈，栈内存储气温数组 T 的 index
// 查看当前元素是否大于栈顶元素所对应的 T 的值，也就是 T[stack[stack.length - 1]]
// 如果大于，那说明找到需要等待的天数。如果不大于那说明还没到找到比这天高的温度。同时继续维护这个单调栈
// 如果大于，需要等待的天数就是当前数组 T 的下标减去单调栈顶对应的下标
// 循环完毕，还没有找到需要等待的天数，为0

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let { length } = T
    let res = new Array(length).fill(0)
    let stack = []
    for(let i = 0; i < length; i++) {

        while(stack.length && T[i] > T[stack[stack.length - 1]]) {
            let index = stack.pop()
            res[index] = i - index
        }
        stack.push(i)

    }
    return res
};

var dailyTemperatures = function(T) {
    var stack = [];
    var day = 0;
    for (let i = 0; i < T.length; i++) {
      
    }
};
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])