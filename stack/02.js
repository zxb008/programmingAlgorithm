function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top - 1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}
//
var trap = function(height) {
    var stack = new Stack();
    for (let i = 0; i < height.length; i++) {
        let h = height[i]
        if (stack.length() == 0) {
            //如果栈为空
        } else {
            
        }
    }
};
trap( [0,1,0,2,1,0,1,3,2,1,2,1])