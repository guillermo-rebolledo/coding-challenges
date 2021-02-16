/*
Find Loop in Linked List

Write a function that takes in the head of a Singly Linked List that contains a loop (in other words, the list's tail node points to some node in the list instead of None / null). The function should return the node (the actual node--not just its value) from which the loop originates in constant space.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list.

Sample Input
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 // the head node with value 0
                           ^         v
                           9 <- 8 <- 7

Sample Output
4 -> 5 -> 6 // the node with value 4
^         v
9 <- 8 <- 7

*/

// O(n) time - n is the nnumber of nodes in the Linked List
// O(1) space

/*
  Algorithm:
  - We have 2 pointers, a 'fast' one and a 'slow' one.
    The fast pointer will be traversing the linked list skipping one node at a time.
    The slow pointer will be traversing all of the nodes in the linked list.
  - Once we know for sure that a loop is present:
      * Move the slow pointer to start of the list,(head) and let the fast pointer remain there at the meeting point.
      * Now  we move both the pointers one node at a time
      * The point where both pointers will meet is our required start of the loop.
  - The reason behind this has some math involved:
      * Distance travelled by the slow pointer before meeting= x + y
      * Distance travelled by fast pointer before meeting = (x + y + z) + y = x + 2y + z
      * Since fastPointer travels with double the speed of slowPointer, and time is constant for both when the reach the meeting point.
        So by using simple speed, time and distance relation.

      2(x+y)= x+2y+z
      => x+2y+z = 2x+2y
      => x=z

      So by moving slow pointer to start of linked list, and making both slow pointer and fast pointer to move one node at a time,
      they both will reach at the point where the loop starts in the linked list.
*/

function findLoop(head) {
  let first = head.next;
  let second = head.next.next;

  while (first !== second) {
    first = first.next;
    second = second.next.next;
  }

  first = head;
  while (first !== second) {
    first = first.next;
    second = second.next;
  }

  return first;
}
