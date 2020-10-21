// 98. 验证二叉搜索树
// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

// 假设一个二叉搜索树具有如下特征：

// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
// 示例 1:

// 输入:
//     2
//    / \
//   1   3
// 输出: true
// 示例 2:

// 输入:
//     5
//    / \
//   1   4
//      / \
//     3   6
// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
//      根节点的值为 5 ，但是其右子节点值为 4 。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */





// 错误思路：root >= 左节点 && root <= 右节点
// 例如：下面这种情况的就不是二叉搜索树
//     5
//    / \
//   1   4
//      / \
//     3   8

// 正确思路1：root >= 左子树的最大值 && root <= 右子树的最小值
// function maxVal(root) {
//     // 采用普通的递归
//     let max = root.val;
//     if (root.left) {
//         max = maxVal(root.left) > max ? maxVal(root.left):max;
//     }
//     if (root.right) {
//         max = maxVal(root.right) > max ? maxVal(root.right):max;
//     }
//     return max;
// }
// function minVal(root) {
//     // 利用迭代法的前序遍历，得到所有的值，然后得到这个树的最大值。
//     // 迭代法的前序遍历的思路: 
//     // 1. 将根节点入栈 2.栈顶出栈，访问当前节点 
//     // 3. 当前节点有右子树，先入栈右子树 4 .当前节点有左子树，再入栈左子树 
//     // 5. 然后不断重复上述操作，这样一样可以保证左子树始终处于栈顶

//     const stack = [];
//     const res = [];
//     let curr = root;
//     stack.push(curr);
//     while (stack.length) {
//         curr = stack.pop();
//         res.push(curr.val);
//         if (curr.right) {
//             stack.push(curr.right)
//         }
//         if (curr.left) {
//             stack.push(curr.left)
//         }
//     }

//     // 从小到大排序
//     res.sort((a, b) => {
//         return a - b
//     })
//     return res[0]
// }
// var isValidBST = function (root) {
//     if (!root) {
//         return true;
//     }
//     if (root.left) {
//         if (maxVal(root.left) >= root.val) {
//             return false;
//         } 
//         // 思考：为什么不能有下面else的这块代码？
//         // 第一次递归的时候，假如,左子树的最大值 <= 根节点，那么会直接返回true，递归结束，右子树都不会递归，这样就会导致错误

//         // 思考：为什么保留上面if的那块代码就没事呢？
//         // 首先，只要出现一次false（虽然也会结束递归），那么就说明不是搜索二叉树。
//         // 假设是搜索二叉树，就是让其一直递归，直到递归到 roo === null的时候，这时返回true才是合适的

//         // else{
//         //     return true;
//         // }
//     }
//     if (root.right) {
//         if (minVal(root.right) <= root.val) {
//             return false;
//         } 
//         // else{
//         //     return true;
//         // }
//     }
//     return isValidBST(root.left) && isValidBST(root.right)
// };


// 正解2：上面maxVal()的方法效率过低，因为需要不断的重复比较来得到子树最大的值,下面是新的思路
// 这里其实是利用 root.val-1 来代替左子树的最大值，root.val+1 来代替右子树的最小值
//  var isValidRealBST = function (root,min,max) {
//      if (!root) {
//          return true;
//      }
//      if (root.val <= min || root.val >= max) {
//          return false;
//      }
//      return isValidRealBST(root.left,min,root.val-1) && isValidRealBST(root.right,root.val+1,max);
// };
//  var isValidBST = function (root) {
//      return isValidRealBST(root, Number.MIN_VALUE, Number.MAX_VALUE )
// };

// 正解3：进行中序遍历，然后看其是否是升序，是的话就返回true，否则返回flase
// 递归法的中序遍历太简单了，这里采用迭代法
var isValidBST = function (root) {
    // 迭代法思路:
    const stack = [];
    const res = [];
    let curr = root;
    while (curr || stack.length) {
        while (curr) {
            // 1. 不断的将左子树入栈
            stack.push(curr);
            curr = curr.left;
        }
        // 2. 此时栈顶元素是最左边的节点
        curr = stack.pop();
        res.push(curr.val);
        // 3. 看当前是否有右子树,curr 指向右子树，将右子树中的左子树不断入栈
        // (注意：即使右子树是 null ，也不要紧，因为紧接着不会执行入栈操作，但是栈会弹出下一个栈顶元素，这个栈顶元素就是当前元素的父节点,所以这种情况就会访问父节点，符合中序遍历)
        curr = curr.right;
    }
    if (res.length > 1) {
        for (let index = 0; index < res.length - 1; index++) {
            let currItem = res[index];
            let nextItem = res[index + 1];
            if (currItem > nextItem) {
                return false;
            }
        }
    }
    return true
};

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(1);
b.left = a;
b.right = c;
console.log(isValidBST(b));