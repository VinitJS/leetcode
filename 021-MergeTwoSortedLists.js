// node 021-MergeTwoSortedLists.js

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let result = new ListNode(null);
    let head = result;
    while(l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    
    while(l1) {
        head.next = l1;
        l1 = l1.next;
        head = head.next;
    }
    
    while(l2) {
        head.next = l2;
        l2 = l2.next;
        head = head.next;
    }

    return result.next;
};

console.log(JSON.stringify(mergeTwoLists(new ListNode(1, new ListNode(3, new ListNode(5))), new ListNode(2, new ListNode(4, new ListNode(6, new ListNode(8)))))));