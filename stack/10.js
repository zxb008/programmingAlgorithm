/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var res = [];
    if (k===0) {
        return res
    }
    for (let i = 0; i <= nums.length-k; i++) {
      res.push(Math.max(...nums.slice(i,i+k)))
      //Math.max.apply(null,nums.slice(i,i+k)
    }
    return res;
};