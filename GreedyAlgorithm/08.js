// 公司计划面试 2N 人。第 i 人飞往 A 市的费用为 costs[i][0]，飞往 B 市的费用为 costs[i][1]。

// 返回将每个人都飞到某座城市的最低费用，要求每个城市都有 N 人抵达。

//  

// 示例：

// 输入：[[10,20],[30,200],[400,50],[30,20]]
// 输出：110
// 解释：
// 第一个人去 A 市，费用为 10。
// 第二个人去 A 市，费用为 30。
// 第三个人去 B 市，费用为 50。
// 第四个人去 B 市，费用为 20。

// 最低总费用为 10 + 30 + 50 + 20 = 110，每个城市都有一半的人在面试。
//  

// 提示：

// 1 <= costs.length <= 100
// costs.length 为偶数
// 1 <= costs[i][0], costs[i][1] <= 1000

// 思路：循环遍历costs数组，然后得到每个人去A还是B的费用更低，然后把每个人最低的花费累加。但是这样是不对的，因为不能保证去A和去B的人数相同

// 正解：循环遍历costs数组，计算每个人去A比去B多花费多少，然后用一个数组resNum储存下来，然后进行由大到小的排序，然后去resNum的前面N个元素，那么
// 这前面N个元素是去B更加划算的，剩余的N个元素去A

/**
 * @param {number[][]} costs
 * @return {number}
 */

var twoCitySchedCost = function(costs) {
    const arr = []
    for (let i = 0; i < costs.length; i++) {
        arr.push({
            costA:costs[i][0],
            costB:costs[i][1],
            abValue:costs[i][0]-costs[i][1]
        })
    }
    // 从大到小排序
    arr.sort((a,b)=>{
        return b.abValue - a.abValue;
    })
    const N =  costs.length / 2;
    let allCostB = 0;
    let allCostA = 0;
    for (let index = 0; index < N; index++) {
        allCostB += arr[index].costB
    }
    for (let index = N; index < 2*N; index++) {
        allCostA += arr[index].costA
    }
    return allCostB + allCostA;

};
console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]));