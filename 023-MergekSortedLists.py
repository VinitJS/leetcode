# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution(object):
    def mergeKLists(self, lists):
        if not lists:
            return None
        if len(lists) == 1:
            return lists[0]
        mid = len(lists) // 2
        l, r = self.mergeKLists(lists[:mid]), self.mergeKLists(lists[mid:])
        return self.merge(l, r)
    
    def merge(self, l, r):
        prev = head = ListNode()
        while l and r:
            if l.val < r.val:
                head.next = l
                l = l.next
            else:
                head.next = r
                r = r.next
            head = head.next
        head.next = l or r
        return prev.next

# Runtime: 108 ms, faster than 52.39% of Python online submissions for Merge k Sorted Lists.
# Memory Usage: 19.3 MB, less than 90.28% of Python online submissions for Merge k Sorted Lists.