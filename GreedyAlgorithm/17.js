// 1338. 数组大小减半
// 给你一个整数数组 arr。你可以从中选出一个整数集合，并删除这些整数在数组中的每次出现。

// 返回 至少 能删除数组中的一半整数的整数集合的最小大小。



// 示例 1：

// 输入：arr = [3,3,3,3,5,5,5,2,2,7]
// 输出：2
// 解释：选择 {3,7} 使得结果数组为 [5,5,5,2,2]、长度为 5（原数组长度的一半）。
// 大小为 2 的可行集合有 {3,5},{3,2},{5,2}。
// 选择 {2,7} 是不可行的，它的结果数组为 [3,3,3,3,5,5,5]，新数组长度大于原数组的二分之一。
// 示例 2：

// 输入：arr = [7,7,7,7,7,7]
// 输出：1
// 解释：我们只能选择集合 {7}，结果数组为空。
// 示例 3：

// 输入：arr = [1,9]
// 输出：1
// 示例 4：

// 输入：arr = [1000,1000,3,7]
// 输出：1
// 示例 5：

// 输入：arr = [1,2,3,4,5,6,7,8,9,10]
// 输出：5

// 题目需要的是用最少的次数删掉一半及以上的数据: "要用最少的次数，必须先删掉重复次数最多的元素"
// 故对数组进行一个map，统计每个元素出现的次数 { 元素, 出现次数 } 。
// 然后将每个 "元素" 的 "出现次数" 抽离出来组成数组,并按照从大到小排序。然后进行循环，循环停止
// 条件是这个数组shift()操作累加的值 >= arr数组长度的一般，同时记录循环的次数，那么这个循环的次数代表元素个数

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    const map = new Map();
    for (let index = 0; index < arr.length; index++) {
        if (map.has(arr[index])) {
            let value = map.get(arr[index]) + 1;
            map.set(arr[index],value)
        } else {
            map.set(arr[index], 1)
        }
    }
    const repeat = [];
    map.forEach((v, k) => {
        repeat.push(v);
    });

    repeat.sort((a, b) => b - a);

    let gets = 0;
    let count = 0;
    while (gets < arr.length / 2) {
        gets += repeat.shift();
        count++;
    }

    return count;

};
console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]));
