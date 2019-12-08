// 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。

// 示例 1:

// 输入: [10,2]
// 输出: 210
// 示例 2:

// 输入: [3,30,34,5,9]
// 输出: 9534330
// 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
/**
 * @param {number[]} nums
 * @return {string}
 */
//[128,12]
// [121,12]
var largestNumber = function (nums) {

  nums = nums.map(item => {
    return item.toString()
  })
  nums.sort((a, b) => {
    let x = Number(a + b)
    let y = Number(b + a)
    return y - x
  })
  let count  = nums.reduce((a,b)=>{
    return Number(a)+Number(b)
  },0)
  if (count !== 0) {
    return nums.join('')
  }else{
    return '0'
  }
};


var largestNumber2 = function (nums) {
  //得到一个字符数组
  nums = nums.map(item => {
    return item.toString()
  })
  //注意字符串的比较：先比较第一个字符，一样的话，接着比较第二个，否则直接返回比较的结果
  //这样子不就达到了：比较两个数值的相同百分位，十分位或者其他分位上面对应的数值大小了
  nums.sort((a, b) => {
    let x = a + b
    let y = b + a
    return y - x
  })
  let count  = nums.reduce((a,b)=>{
    return Number(a)+Number(b)
  },0)
  if (count !== 0) {
    return nums.join('')
  }else{
    return '0'
  }
};
// console.log(largestNumber([10, 2]));
// console.log(largestNumber([3, 30, 34, 5, 9]));
// console.log(largestNumber([121, 12]));
console.log(largestNumber([0, 0]));