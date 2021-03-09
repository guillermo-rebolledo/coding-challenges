/*
21. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/
*/

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

 // Approach using Dummy Node
 // Time complexity: O(N+M) where N & M are the length of the two lists
 // Space Complexity: O(1) it's constant space because we didn't create a whole new data structure,
 //   we only 'rewired' the pointers of the lists that already existed before this algorithm was executed.
var mergeTwoLists = function(l1, l2) {
  let dummyNode = new ListNode(0);
  let tail = dummyNode;
  
  while (true) {
    // if the list 1 (l1) runs out of nodes, point to the other list to finish
    if (l1 === null) {
      tail.next = l2;
      break;
    }
    
    // if the list 2 (l2) runs out of nodes, point to the other list to finish
    if (l2 === null) {
      tail.next = l1;
      break;
    }
    
    // compare the values of the current nodes of each list, the smaller value gets the placement
    // that means the smaller node is appended to the tail.
    if (l2.val <= l1.val) {
      tail.next = l2;
      l2 = l2.next; 
    } else {
      tail.next = l1;
      l1 = l1.next;
    }
    
    // advance the tail
    tail = tail.next;
  }
  
  // return dummyNode.next because we don't care about the first node, we created that just as a starting point
  return dummyNode.next;
};

// Recursive Approach
 // Time complexity: O(N+M) where N & M are the length of the two lists
 // Space Complexity: O(N) because we are using the call stack (N is the number of calls in the stack)
 var mergeTwoLists = function(l1, l2) {
   if (l1 === null) return l2;
   if (l2 === null) return l1;
   
   if (l1.val < l2.val) {
     l1.next = mergeTwoLists(l1.next, l2);
     return l1;
   } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
   }
 };
 