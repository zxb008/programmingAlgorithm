// 我们有一个项的集合，其中第 i 项的值为 values[i]，标签为 labels[i]。

// 我们从这些项中选出一个子集 S，这样一来：

// |S| <= num_wanted
// 对于任意的标签 L，子集 S 中标签为 L 的项的数目总满足 <= use_limit。
// 返回子集 S 的最大可能的 和。

//  

// 示例 1：

// 输入：values = [5,4,3,2,1], labels = [1,1,2,2,3], num_wanted = 3, use_limit = 1
// 输出：9
// 解释：选出的子集是第一项，第三项和第五项。
// 示例 2：

// 输入：values = [5,4,3,2,1], labels = [1,3,3,3,2], num_wanted = 3, use_limit = 2
// 输出：12
// 解释：选出的子集是第一项，第二项和第三项。
// 示例 3：

// 输入：values = [9,8,8,7,6], labels = [0,0,0,1,1], num_wanted = 3, use_limit = 1
// 输出：16
// 解释：选出的子集是第一项和第四项。
// 示例 4：

// 输入：values = [9,8,8,7,6], labels = [0,0,0,1,1], num_wanted = 3, use_limit = 2
// 输出：24
// 解释：选出的子集是第一项，第二项和第四项。



// 第一点要求 |S| <= num_wanted 是说选择的总数不能超过 num_wanted
// 第二点要求是说同一个标签下的项，选择的数量不能超过 use_limit
// 现在要求返回子集中最大的可能和

// 作者：Jiachen_Zhang
// 链接：https://leetcode-cn.com/problems/largest-values-from-labels/solution/tan-xin-hen-jian-dan-de-si-lu-han-ti-yi-fen-xi-by-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function (values, labels, num_wanted, use_limit) {
    const arr = [];
    let res = 0, count = 0;
    for (let index = 0; index < labels.length; index++) {
        arr.push({
            label: labels[index],
            value: values[index]
        })
    }
    arr.sort((a, b) => {
      return   b.value - a.value
    });
    // map存着每个lable的选取次数
    const map = new Map();
    for (let index = 0; index < arr.length; index++) {
        let item = arr[index];
        if (map.has(item.label)) {
            if (map.get(item.label) === use_limit) {
                // 当该标签下对应的次数(也就是选取该标签label的次数)达到了 use_limit 的时候，应该跳过这次循环，进行下一次的循环，直到遇到其他标签label
                continue;
            }
            let count = map.get(item.label);
            count++;
            map.set(item.label, count);
        } else {
            map.set(item.label, 1);
        }
        console.log(item.value);
        res += item.value;
        count++;
        if (count >= num_wanted) {
            break;
        }

    }
    return res;
};
// console.log(largestValsFromLabels([5, 4, 3, 2, 1], [1, 1, 2, 2, 3], 3, 1));
// console.log(largestValsFromLabels([5, 4, 3, 2, 1], [1, 3, 3, 3, 2], 3, 2));
console.log(largestValsFromLabels([2,6,1,2,6],[2,2,2,1,1],1,1));