// https://leetcode-cn.com/problems/minimum-subsequence-in-non-increasing-order/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    nums.sort((a,b)=>{
        return b -a;
    })
    const res = [];
    for (let index = 0; index < nums.length; index++) {
        res.push(nums[index]);
        let resSum = res.reduce((pre,cur)=>{return pre+cur},0)
        let numSum = nums.slice(index+1).reduce((pre,cur)=>{return pre+cur;},0)
        if (resSum > numSum) {
            return res;
        }
    }
};
console.log( minSubsequence([4,3,10,9,8]));