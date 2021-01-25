/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
 };
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    // 1.利用map
    // const map = new Map();
    // let curr = head;
    // while (curr) {
    //      // 这里利用map，可以先直接不用关注节点之间的指针关系，只复制了所有的节点
    //     map.set(curr,new Node(curr.val,null,null));
    //     curr = curr.next;
    // }
    
    // for (let key of map.keys()) {
    //     // 这种写法很有意思(但是这里需要注意的是： key.next需要判断是不是null，因为null在map中没有保存))
    //      map.get(key).next = key.next ? map.get(key.next) : null ;
    //      map.get(key).random = key.random ? map.get(key.random) : null;
    // }
    // return map.get(head);

    // 2.两次迭代法
    if(!head || !head.next){
        return head
    }
    let curr = head;
    let copy;
    let next;
    while (curr) {
        next = curr.next;
        copy = new Node(curr.val,null,null);
        copy.next = next;
        curr.next = copy;
        
        curr = curr.next.next;
    }
    // 1->1`->2->2`
    let node = head;
    while (node && node.next) {
        node.next.random = node.random ? node.random.next : null;
        node = node.next.next;
    }
    // 拆分链表
    let res = head.next
    let lastRes = res;
    let nextRes;
    while (lastRes && lastRes.next) {
        nextRes = lastRes.next.next;
        lastRes.next = nextRes;
        lastRes = lastRes.next;
    }
    return res;
};