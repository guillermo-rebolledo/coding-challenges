/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const middleNode = (head) => {
  let current = head;
  let total = 1;

  while (current.next !== null) {
    total += 1;
    current = current.next;
  }

  if (total === 1) return current;

  let toReturn = Math.floor(total / 2);

  current = head;
  for (let i = 0; i < total; i++) {
    if (i === toReturn) return current;
    current = current.next;
  }
};