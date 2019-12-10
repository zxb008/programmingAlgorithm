// // 524. 通过删除字母匹配到字典里最长单词

// 给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。

// 示例 1:

// 输入:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]

// 输出: 
// "apple"
// 示例 2:

// 输入:
// s = "abpcplea", d = ["a","b","c"]

// 输出: 
// "a"
// 说明:

// 所有输入的字符串只包含小写字母。
// 字典的大小不会超过 1000。
// 所有输入的字符串长度不会超过 1000。

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  //注意这句：如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。
  //所以是优先去长度最长的字符串，如果长度一样，再字典顺序最小的字符串，所以我们可以按照这种思路把数组排序
  let res = []
  d.forEach((item, index) => {
    //得到每个元素，然后循环这个元素，判断这个元素属不属于子串
    let j = 0
    for (let i = 0; i < s.length && j < item.length; i++) {
      if (s.charAt(i) === item.charAt(j)) {
        j++
      }
    }
    if (j === item.length) {
      res.push({
        ele: item,
        len: item.length
      })
    }
  })

  //把符合条件元素放入result数组里面，然后对这个数组根据元素的长度从大到小进行排序
  if (res.length !== 0) {
    res.sort((a, b) => {
      return b.len - a.len
    })
    //第一个元素就是符合条件并且最长的字符串
    let len = res[0].len
    //把最长的且符合条件的字符串存入这个数组中
    let eleSortArr = []
    res.forEach(item => {
      if (item.len === len) {
        eleSortArr.push(item)
      }
    })
    //eleSortArr按照字符串的大小排序，也就是字典顺讯排序
    eleSortArr.sort((a, b) => {
      return a.ele > b.ele
    })
    return eleSortArr[0].ele
  } else {
    return ""
  }

};
// console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]))
// console.log(findLongestWord("a",["a"]))
// console.log(findLongestWord("bab",["ba","ab","a","b"]))
console.log(findLongestWord("abcbdefghiabcbde", ["bcb", "def", "abc", "bde", "ghi"]))