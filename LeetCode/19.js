/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let removeNthFromEnd = function (head, n) {
    let queue = [];
    let temp = head;
    while (temp!=null) {
        queue.push(temp);
        temp = temp.next;
    }
    queue = queue.reverse();
    if (n == queue.length) {
        return queue[n-1].next;
    } else {
        queue[n].next = queue[n-1].next;
        return head;
    }
};