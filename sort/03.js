// 给出一个区间的集合，请合并所有重叠的区间。

// 示例 1:

// 输入: [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2:

// 输入: [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间

var merge = function (intervals) {
  //  interval是一个数组，元素是一个类似[a,b]数组
  //interval按照元素的a的大小从小到大排序
  intervals.sort((pre, cur) => {
    return pre[0] - cur[0]
  })
  //intervals 就类似[[1,3],[2,6],[8,10],[15,18]]
  let prvItem = null, mergeIntervals = [];
  while (intervals.length) {
    let item = intervals.shift();

    if (prvItem && prvItem[1] >= item[0] && prvItem[0] <= item[1]) {
      //有交集的时候
      prvItem = [Math.min(prvItem[0],item[0]),Math.max(prvItem[1],item[1])]
      if (intervals.length === 0) {
        mergeIntervals.push(prvItem)
      }
    } else if (prvItem && (prvItem[1] < item[0] || prvItem[0] > item[1])) {
        //无交集的时候
      mergeIntervals.push(prvItem)
      prvItem = item
      if (intervals.length === 0) {
        mergeIntervals.push(prvItem)
      }

    }
    else {
      prvItem = item
      if (intervals.length === 0) {
        mergeIntervals.push(prvItem)
      }
    }
  }
  return mergeIntervals
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
