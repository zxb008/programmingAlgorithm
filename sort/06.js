//煎饼排序

// 给定数组 A，我们可以对其进行煎饼翻转：我们选择一些正整数 k <= A.length，然后反转 A 的前 k 个元素的顺序。我们要执行零次或多次煎饼翻转（按顺序一次接一次地进行）以完成对数组 A 的排序。

// 返回能使 A 排序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * A.length 范围内的有效答案都将被判断为正确。

//  

// 示例 1：

// 输入：[3,2,4,1]
// 输出：[4,2,4,3]
// 解释：
// 我们执行 4 次煎饼翻转，k 值分别为 4，2，4，和 3。
// 初始状态 A = [3, 2, 4, 1]
// 第一次翻转后 (k=4): A = [1, 4, 2, 3]
// 第二次翻转后 (k=2): A = [4, 1, 2, 3]
// 第三次翻转后 (k=4): A = [3, 2, 1, 4]
// 第四次翻转后 (k=3): A = [1, 2, 3, 4]，此时已完成排序。 
// 示例 2：

// 输入：[1,2,3]
// 输出：[]
// 解释：
// 输入已经排序，因此不需要翻转任何内容。
// 请注意，其他可能的答案，如[3，3]，也将被接受。


var pancakeSort = function (A) {
  let arr = [...A]
  A.sort((a, b) => {
    return a - b
  })
  let isSort = arr.every((item, index) => {
    return item === A[index]
  })
  if (isSort) {
    return []
  } else {
    let result = [];
    while (arr.length > 1) {
      //找到数组中最大的数字的下标
      let index = arr.indexOf(Math.max(...arr)) + 1
      if (index === 1) {
        arr.reverse()
        result.push(arr.length)
        arr.pop()
      } else if(index >1 && index < arr.length){
        arr = arr.slice(0, index).reverse().concat(arr.slice(index)).reverse()
        result.push(index)
        result.push(arr.length)
        arr.pop()
      }else if(index === arr.length){
        arr.pop()
      }
     
    }
    return result
  }
};
console.log(pancakeSort([3, 2, 4, 1]));
console.log(pancakeSort([2,1,3]));
console.log(pancakeSort([2,1]));
