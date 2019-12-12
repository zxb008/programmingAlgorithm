//767.重构字符串
// 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

// 若可行，输出任意可行的结果。若不可行，返回空字符串。

// 示例 1:

// 输入: S = "aab"
// 输出: "aba"
// 示例 2:

// 输入: S = "aaab"
// 输出: ""


//解题思路：

// 比如 "aaabbc"，当发现第二个字符也是 ‘a’ 的时候，就需要往后遍历找到第一个不是 ‘a’ 的字符，
// 即 ‘b’，然后交换 ‘a’ 和 ‘b’ 即可，然后继续往后面进行同样的处理，当无法找到不同的字符后就
// 返回空串。这种方法对有序的字符串S是可以的，虽然题目给的两个例子中字符串S都是有序的，实际上
// 不一定是有序的。所以最先的想法是给数组排序呗，但是博主的这个解法跪在了这个例子上 "vvvlo"，
// 我们发现排序后就变成 "lovvv"，这样上面提到的解法就跪了。其实这里次数出现多的字符串需要在前面，
// 这样才好交换嘛。那么还是要统计每个字符串出现的次数,再进行排序

var reorganizeString = function (S) {
  S = S.split('');
  let singleArr = [...new Set(S)]
  let arr = []
  //得到一个对象数组，元素是字符和字符数量
  for (let i = 0; i < singleArr.length; i++) {
    let count = 0;
    for (let j = 0; j < S.length; j++) {
      if (singleArr[i] === S[j]) {
        count++
      }
    }
    arr.push({
      ele: singleArr[i],
      count
    })
  }
  //按照字符出现的次数从大到小排列
  // [{ele:'v',count:3},{ele:'l',count:1},{ele:'o',count:1}]
  arr.sort((a, b) => {
    return b.count - a.count
  })
  // console.log(arr);
  let strNum = arr.length //得到数组的长度，也就是不同字符的个数
  let maxS = arr[0].count //得到出现次数最多的字符的次数
  if (maxS <= strNum ) {
    //转化为数组
    // [ 'v', 'v', 'v', 'l', 'o' ]
    arr = arr.map(item => {
      let str = ""
      for (let i = 0; i < item.count; i++) {
        str += item.ele
      }
      return str
    }).join('').split('')
    //位置的重整 
    let middle = ""
    for (let i = 0; i < arr.length-1; i++) {
       //往后找到不同的字符，然后交换位置
      if (arr[i] === arr[i+1] ) {
        arr.forEach((item,index)=>{
          if (index>i+1) {
              if ( item !== arr[i+1]) {
                 middle  = arr[i+1]
                 arr[i+1] = item
                 arr[index] = middle
              } 
          }
        })
      }
    }
   
    return arr.join('')
  } else {
    return ""
  }
};
// reorganizeString('lovvv')
console.log(reorganizeString("baaba"));
