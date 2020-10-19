// 94. 二叉树的中序遍历
// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 思考：所谓迭代法就是利用一个栈来模仿递归方法时候的调用栈，所谓中序遍历就是 左子树->节点->右子树
// 方法：其实就是不断的找节点的左子树，同时不断的入栈，一直到没有左子树了，
// 那么此时栈顶元素就是第一个访问的节点元素(也就是最左边的左节点)，然后弹
// 出栈顶元素,再看接下来的栈顶元素是否有右子树，如果有的话，重复上述操作，
// 没有的话，继续弹出，不断地重复上述操作
var inorderTraversal = function(root) {
    const stack = [];
    const res = [];
    let curr = root;

    while ( curr ||  stack.length) {
        // 首先不断的将左子树入栈，使得栈顶元素是最左边的节点（但是，请注意，其不一定是叶子节点哈！！！）
        while (curr) {
            stack.push(curr);
            curr = curr.left
        }
        // 将栈顶元素弹出
        curr = stack.pop();
        res.push(curr.val);
        // 将栈顶元素的右子树重复上述操作
        curr = curr.right
    }
    return res
};