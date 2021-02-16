/**
 *  234. Palindrome Linked List
 * https://leetcode.com/problems/palindrome-linked-list/
 Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
let isPalindrome = function (head) {
  // Define a temp head and 2 Pointers: Fast & Slow
  // Slow will help us later on to actually check if the values are the same forwards and backwards
  // Fast will help us to traverse the list to get slow to the half of it. Fast goes 2x faster than Slow
  let tempHead = head;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // We reverse the second half of the list,
  // we pass the slow pointer in order to have the second half reversed.
  // (at this point slow is at the half).
  let reversedLatterHalf = reverseList(null, slow);

  // We check if any of the values in the normal list (tempHead that we stored)
  // are any different than the ones in the reversed list. If they are,
  // then it's not a palindrome.
  while (reversedLatterHalf) {
    if (reversedLatterHalf.val != tempHead.val) return false;
    tempHead = tempHead.next;
    reversedLatterHalf = reversedLatterHalf.next;
  }
  return true;
};

// Function to reverse a Linked List
let reverseList = (prev, tempHead) => {
  while (tempHead) {
    [tempHead.next, prev, tempHead] = [prev, tempHead, tempHead.next];
  }
  return prev;
};
