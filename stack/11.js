/**
 * @param {string[]} equations
 * @return {boolean}
 */ 
// 并查集：做两次循环，第一次循环遍历想x==y的情况，把这类元素归类合并，第二次循环遍历x!=y这种情况，看看x和y是不是在一个类里面，如果在一个类里面，返回false，否则返回true
// 问题：第一种情况，我们如何合并两个类，第二种情况，我们如何看x和y是不是在一个类呢？
// 方法：可以利用数组构建树，一个树就代表一个类，元素归类合并就是把两个树合并一个树，看x和y是不是在一个类中就是看x和y的根节点是不是同一个。
var equationsPossible = function(equations) {
    const uf = new Tree(26)
  for (const e of equations) { // 将字母对应成数字
    if (e[1] === '=') uf.union(e.charCodeAt(0) - 97, e.charCodeAt(3) - 97) 
  }
  for (const e of equations) {
    if (e[1]=='!'&&uf.findRoot(e.charCodeAt(0)-97)==uf.findRoot(e.charCodeAt(3)-97))
      return false
  }
  return true

};
class Tree {
    constructor(nums){
        //-1代表每个元素的根节点就是本身
       this.arr = new Array(nums).fill(-1);
       //deep数组记录根节点所在树的深度
       this.deep = new Array(nums).fill(0);
    }
    // 找到根节点
    findRoot(x){
        let root_x = x;
        while (this.arr[root_x] !== -1) {
            root_x = this.arr[root_x];
        }
        return root_x;
    }
    // 合并两个树(类)
    union(x,y){
        let root_x = this.findRoot(x);
        let root_y = this.findRoot(y);
        if (root_x === root_y)
            return
        let deep_x = this.deep[root_x];
        let deep_y = this.deep[root_y];
        if (deep_x < deep_y) {
            this.arr[root_x] = root_y
        }else if (deep_x > deep_y) {
            this.arr[root_y] = root_x
        } else {
            this.arr[root_y] = root_x;
            this.deep[root_x]++
        }
    }
}
