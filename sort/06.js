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
    //所以是优先去长度最长的字符串，如果长度一样，再去顺序最小的zifuchaun，所以我们可以按照这种思路把数组排序
    let res = []
    s = s.split('').sort().join('')
  
    d.forEach((item, index) => {
        let copyItem = item
        console.log(s,copyItem.split('').sort().join(''));
        
        if (s.includes(copyItem.split('').sort().join(''))) {
            res.push({
                ele: item,
                len: item.length,
                index
            })
        }
    })
    //把符合条件元素放入result数组里面，然后对这个数组根据元素的长度从大到小进行排序
    if (res.length !== 0) {
        res.sort((a, b) => {
            b.length - a.length
        })
        let result = null
        while (res.length) {
            let item = res.unshift()
            if (result && result.length === item.length) {
                //比较两个元素的顺序
                if (result.index < item.index) {
                    return result.ele
                }
            } else if (result && result.length > item.length) {

                return result.ele
            }
            result = item
        }
        // return result.ele
    } else {
        return ""
    }

};
console.log(findLongestWord("abpcplea",["ale", "apple", "monkey", "plea"]));
