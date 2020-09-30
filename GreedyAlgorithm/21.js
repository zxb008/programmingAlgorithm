// 第 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。

// 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

// 返回载到每一个人所需的最小船数。(保证每个人都能被船载)。

// 提示：

// 1 <= people.length <= 50000
// 1 <= people[i] <= limit <= 30000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/boats-to-save-people
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
// 思路：一条船要么载一个人，要么载两个人。并且人的总重量必须小于limit。所以选人入船的时候，应该从最重的+最轻的。
var numRescueBoats = function (people, limit) {
    let count = 0;
    people.sort((a, b) => {
        return a - b;
    });
    while (people.length) {
        if (people.length >= 2) {
            const weightTwoPeople = people[0] + people[people.length-1];
            if (weightTwoPeople <= limit) {
                // 最重 + 最轻 没有超重
                people.shift();
                people.pop()
            } else {
                // 最重 + 最轻 超重
                people.pop()
            }
        }else{
            people.splice(0, 1);
        }
        count++
    }
    return count;
};
numRescueBoats([3, 2, 2, 1], 3)
numRescueBoats([5,1,4,2],6)