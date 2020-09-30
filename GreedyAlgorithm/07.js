// https://leetcode-cn.com/problems/water-bottles/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
// 思路:递归，喝完了酒，空瓶子就能换新酒，新酒喝完剩余空瓶子，再换新酒，如此循环，直到达到某个条件，不能再换酒了，这不就是递归吗？不能换酒的条件就是递归结束的条件
var getNum = function (numBottles, numSurplus, numExchange) {
    if (numBottles + numSurplus < numExchange) {
        //  酒 + 剩余空瓶子 不够换酒
        return numBottles;
    }
    // 酒 + 剩余空瓶子  够换酒

    let newNumWine = Math.floor((numBottles + numSurplus) / numExchange); //新换酒的数量

    let surNum = (numBottles + numSurplus) - newNumWine * numExchange; // 剩余空瓶子数量

    return numBottles + getNum(newNumWine, surNum, numExchange)
}
var numWaterBottles = function (numBottles, numExchange) {
    return getNum(numBottles, 0, numExchange)
};
console.log(numWaterBottles(17, 3));