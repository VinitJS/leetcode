# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        prev = tail = ListNode()
        tail.next = head
		
        while tail.next and tail.next.next:
            first = tail.next
            second = tail.next.next
            third = tail.next.next.next
            
            tail.next = second
            tail.next.next = first
            tail.next.next.next = third
            
            tail = first
        return prev.next

# Runtime: 12 ms, faster than 97.43% of Python online submissions for Swap Nodes in Pairs.
# Memory Usage: 13.5 MB, less than 55.39% of Python online submissions for Swap Nodes in Pairs.