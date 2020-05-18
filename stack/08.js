/**
 * @param {number[]} heights
 * @return {number}
 */

 //思路：对于每个柱子而言，这个柱子能勾勒最大的面积 S = height * （right_i - left-i - 1）,height是柱子的高度，right_i是右边第一个比该柱子低的柱子的下标，left_i是左边第一个比该柱子低的柱子的下标
 //方法：构建一个单调栈，遍历数组，当前元素小于栈顶元素时候，弹出栈顶元素，计算该柱子勾勒最大面积，并更新最大面积。弹出以后，如果当前元素仍然小于栈顶元素的时候，继续弹出栈顶元素，并更新最大面积
 var largestRectangleArea = function(heights) {
    var maxarea = 0;
    var stack = [];
    heights.push(0);
    heights.unshift(0);
    for(var i = 0;i < heights.length;i++){
        while(stack.length > 0 && heights[stack[stack.length-1]] > heights[i]){
            maxarea = Math.max(maxarea,heights[stack.pop()] * (i - stack[stack.length-1] - 1));
        }
        stack.push(i);
    }
    return maxarea;
};