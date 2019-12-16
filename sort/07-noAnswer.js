// //767.重构字符串
// 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

// 若可行，输出任意可行的结果。若不可行，返回空字符串。

// 示例 1:

// 输入: S = "aab"
// 输出: "aba"
// 示例 2:

// 输入: S = "aaab"
// 输出: ""

/**
 * @param {string} S
 * @return {string}
 */

// 写一个NewChar类，里面包含字母的出现频数，和字母本身。用优先队列PriorityQueue来存储一个一个的NewChar，并自己写一个比较器，
// 通过字母的频数降序排列，即构建一个大顶堆。之后两两输出，输出前两个大的，然后将它们两个对应的count频率-1，再次放入，继续输出……

var reorganizeString = function (S) {
  S = S.split('')
  //将数组去重
  let singleArr = [... new Set(S)]
  let arr = []
  singleArr.forEach(ele => {
    let count = 0
    S.forEach(item => {
      if (ele === item) {
        count++
      }
    })
    arr.push({
      ele,
      count
    })
  })
  arr.sort((a, b) => {
    return b.count - a.count
  })
  console.log(arr);

  let str = ""
  while (arr.length) {
    if (arr.length > 1) {
      let pre = arr[0]
      let curr = arr[1]
      //判断当前两个元素的次数
      if (pre.count > 0 && curr.count > 0) {
        str += (pre.ele + curr.ele)
        console.log(str);
        pre.count--;
        curr.count--;
      }
      else if (pre.count === 0 && curr.count > 0) {
        //2.pre元素的个数为0
        arr.shift()
      } else if (pre.count > 0 && curr.count === 0) {
        //3.curr元素的个数为0
        arr[1] = arr[0]
        arr.shift()
      } else {
        //1.两个元素的个数都是0
        arr.shift()
        arr.shift()
        if (arr.length  === 0) {
          return str
        }
      }
    } else {
      if (arr.length === 1) {
        //arr长度为1
        let item = arr.shift()
        if (item.count > 1) {
          return ""
        } else {
          return str + item.ele
        }
      } else {
        //长度为0
        return str
      }
    }
  }
};


console.log(reorganizeString("abbabbaaab"));

