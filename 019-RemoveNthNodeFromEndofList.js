// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let front = head;
    let preStart;
    let behind = preStart = new ListNode(null, head); 
    while (n--) front = front.next; // move right in by n places
    while (front) { // start moving remaining places for left
      front = front.next;
      behind = behind.next;
    }
    behind.next = behind.next.next;
    return preStart.next;
  };

// console.log(JSON.stringify(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)));
console.log(JSON.stringify(removeNthFromEnd(new ListNode(1), 1)));