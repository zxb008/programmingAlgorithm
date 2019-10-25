
var MinStack = function () {
    this.arr = [];
    this.count = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.arr.push(x)
    this.count = Math.min(x,this.count)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let item =  this.arr.pop()
  if (item == this.count) {
      this.count = Math.min(...this.arr)
  } 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
   let len = this.arr.length
   return this.arr[len-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
   return this.count
};