// 给定一棵二叉搜索树，请找出其中第k大的节点。

// 示例 1:

// 输入: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// 输出: 4
// 示例 2:

// 输入: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// 输出: 4
//  

// 限制：

// 1 ≤ k ≤ 二叉搜索树元素个数

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// 其实就是进行中序遍历，当遍历的下标是3的时候，返回这个值，因为这是二叉搜索树，左子树 > 根节点 > 右节点

var kthLargest = function(root, k) {
    const res = [];
    function  middlePreface(root) {
        if (root.left) {
            middlePreface(root.left)
        }
        res.push(root.val);
        if (root.right) {
            middlePreface(root.right)
        }
    }
    middlePreface(root,res);
    // res是一个从小到大排序的数组
    return res.reverse()[k-1];
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 let a = new TreeNode(1);
 let b = new TreeNode(2);
 let c = new TreeNode(3);
b.left = a;
b.right = c;
console.log(kthLargest(b,1));