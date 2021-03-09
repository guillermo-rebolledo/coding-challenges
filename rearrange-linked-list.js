class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }


  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

/*
1. We can use the Fast & Slow pointers method similar to Middle of the LinkedList to find the middle node of the LinkedList.
2. Once we have the middle of the LinkedList, we will reverse the second half of the LinkedList.
3. Finally, we’ll iterate through the first half and the reversed second half to produce a LinkedList in the required order.
*/
const reorder = function(head) {
  if (head === null || head.next === null) {
    return;
  }

  let tempHead = head;
  let slow = head;
  let fast = head;

  // find middle of the LinkedList
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reversedHead = reverse(slow);

  while(tempHead !== null && reversedHead !== null) {
    let temp = tempHead.next;
    tempHead.next = reversedHead;
    tempHead = temp;

    temp = reversedHead.next;
    reversedHead.next = tempHead;
    reversedHead = temp;
  }

  // set the next of the last node to 'null'
  if (tempHead !== null) {
    tempHead.next = null;
  }
}


function reverse(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}


var head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);
head.print_list();