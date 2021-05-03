/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    function traverse(l1, l2, lr, remainder) {
        lr.next = {
            val: (((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + remainder)%10,
            next: null
        }
        if(l1 && l1.next) {
            if(l2 && l2.next) {
                traverse(l1.next, l2.next, lr.next, Math.floor((((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + remainder)/10));
            } else {
                traverse(l1.next, null, lr.next, Math.floor((((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + remainder)/10));
            }
        } else if(l2 && l2.next) {
            traverse(null, l2.next, lr.next, Math.floor((((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + remainder)/10));
        } else if(Math.floor((((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + remainder)/10) > 0) {
            lr.next.next = {
                val: Math.floor((((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + remainder)/10),
                next:null
            }
        }
    }
    
    const l3 = {
        val: ((l1.val || 0) + (l2.val || 0))%10,
        next: null
    }
    
    if(l1.next || l2.next) {
        traverse(l1.next, l2.next, l3, Math.floor(((l1.val || 0) + (l2.val || 0))/10));
    } else if(Math.floor((((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + 0)/10) > 0) {
        l3.next = {
            val: Math.floor((((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + 0)/10),
            next:null
        }
    }
    
    return l3
};