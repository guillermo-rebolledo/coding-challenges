/**
 * 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/

 Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(n) time - where n is the number of nodes in the linked list
// O(1) space - since we are doing it in place
var reverseList = function (head) {
  let previousNode = null;
  let node = head;

  while (node) {
    let nextNode = node.next; // temporarily store the next node
    node.next = previousNode; // reverse the current node
    previousNode = node; // before we move to the next node, point previous to the current node
    node = nextNode; // move on the next node
  }

  return previousNode;
};

// Approach with Array Destructuring
let reverseList = (prev, head) => {
  while (head) {
    [head.next, prev, head] = [prev, head, head.next];
  }
  return prev;
};
