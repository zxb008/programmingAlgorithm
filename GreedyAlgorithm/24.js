// 435. 无重叠区间
// 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。

// 注意:

// 可以认为区间的终点总是大于它的起点。
// 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
// 示例 1:

// 输入: [ [1,2], [2,3], [3,4], [1,3] ]

// 输出: 1

// 解释: 移除 [1,3] 后，剩下的区间没有重叠。
// 示例 2:

// 输入: [ [1,2], [1,2], [1,2] ]

// 输出: 2

// 解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
// 示例 3:

// 输入: [ [1,2], [2,3] ]

// 输出: 0

// 解释: 你不需要移除任何区间，因为它们已经是无重叠的了。

// 思考：首先的所有的区间相加占领的总长度是一定的，那么当其中两个区间重叠，为了使得剩余的区间不重叠且数量最多，那么应该保留结尾小的。

// 贪心算法，按照起点排序：选择结尾最短的，后面才可能连接更多的区间（如果两个区间有重叠，应该保留结尾小的） 
// 把问题转化为最多能保留多少个区间，使他们互不重复，则按照终点排序，每个区间的结尾很重要，结尾越小，则后面
// 越有可能容纳更多的区间。

// 在每次选择中，选择的区间结尾越小，留给后面的区间的空间越大，那么后面能够选择的区间个数也就越大。
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let total = intervals.length;
    // 按照区间的起点进行从小到大的排序
    intervals.sort((a,b)=>{
        return a[0] - b[0];
    });
    for (let index = 0; index < intervals.length-1; index++) {
        const sectionFirst = intervals[index];
        const sectionSecond = intervals[index+1];
        if (sectionFirst[1] > sectionSecond[0]) {
            // 第一个区间的结尾 > 第二个区间的开头，此时说明产生了重叠

            if (sectionFirst[1] < sectionSecond[1]) {
                // 第一个区间的结尾 < 第二个区间的结尾，删除第二个，保留第一个
                intervals.splice(index+1,1);
            } else {
                // 反之亦然
                intervals.splice(index,1);
            }
            index--;
        }
    }
    return total - intervals.length;
};

console.log(eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ]));