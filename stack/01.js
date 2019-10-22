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
// 思路：遍历s字符串，当遇到左括号的时候就将左括号进栈，当遇到右括号的时候，就检测当前栈顶的元素是否是匹配的右括号的左括号（或则是说当前栈顶的左括号是否与遍历到的右括号匹配），匹配的话就在进行循环，不匹配的话就直接返回false
var isValid = function (s) {
    if (s==" "|| s=="") {
        return true
    }
    var stack = new Stack();
    var left = ['(','{','['];
    var right = [')','}',']'];
   for (let i = 0; i < s.length; i++) {
      if (left.indexOf(s[i])!= -1) {
          stack.push(s[i]);
      } else if(s[i] === " ") {
          continue
      }else{
          if (stack.pop() != left[right.indexOf(s[i])]) {
             console.log(1);
              return false
          }
      }
   }
   if (stack.length() != 0) {
       return false
   }
   return true;
};

console.log(isValid("()"));

