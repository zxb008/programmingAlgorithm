
var MinStack = function () {
    this.arr = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.arr.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    var height = this.arr.length;
    if (height > 0) {
        return this.arr[height - 1]
    } else {
        return 0
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    var arr2 = this.arr;
    var height = arr2.length;
    if (height > 0) {
        arr2.sort(function (a, b) {
            return a - b;
        });
        return arr2[0]
    }else{
        return 0
    }
   
};