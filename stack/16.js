// https://leetcode-cn.com/problems/online-stock-span/

//总结：运用单调栈的思路，也就是说在队列或数组中，我们需要通过比较前后元素的大小关系来解决问题时我们通常使用单调栈。


var StockSpanner = function () {

};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    const stack = [];
    for (let index = 0; index < price.length; index++) {
        let element = price[index];
        let count = 1;
        if (stack.length === 0) {
            // 栈空入栈
            stack.push({
                element,
                count
            })
        } else {
            let len = stack.length;
            while (len > 0 && stack[len - 1].element < element) {
                len--;
                count++;
            }
            stack.push({
                element,
                count
            })
        }
        // console.log(stack);
    }
    return stack.map(item => {
        return item.count;
    })
};
const stock = new StockSpanner();
console.log(stock.next([100, 80, 60, 70, 60, 75, 85]));
/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */