/**
 *  TOPIC: Sliding Windows
 */

// Brute Force Approach O(N*K) (N = length of array)
function BF_find_averages_of_subarrays(K, arr) {
  const result = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    // find sum of next 'K' elements
    sum = 0.0;
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K); // calculate average
  }

  return result;
}

console.time("BRUTE");
const result = BF_find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.timeEnd("BRUTE");
console.log(`Averages of subarrays of size K: ${result}`);

// Sliding Windows Approach - O(N)
function find_averages_of_subarrays(K, arr) {
  const res = [];
  let windowSum = 0.0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      res.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  return result;
}

console.time("SLIDING_WINDOW");
const result2 = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.timeEnd("SLIDING_WINDOW");
console.log(`Averages of subarrays of size K: ${result2}`);

/*
Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:
Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:
Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/
const max_sub_array_of_size_k = function (k, arr) {
  let windowStart = 0;
  let windowSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return maxSum;
};

console.log(
  `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [
    2,
    1,
    5,
    1,
    3,
    2,
  ])}`
);
console.log(
  `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [
    2,
    3,
    4,
    1,
    5,
  ])}`
);

// Time Complexity: O(N) N = number of characters in the input string
// Space Complexity: O(K) K = number of distinct characters in the input string
// Approach: Sliding Window
const non_repeat_substring = function (str) {
  let windowStart = 0;
  let maxLength = 0;
  const charIndexMap = new Map(); // Map<string, number> -> <character, indexFound@>;

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (charIndexMap.has(rightChar)) {
      // in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charIndexMap.get(rightChar) + 1);
    }
    // insert the 'rightChar' into the map
    charIndexMap.set(str[windowEnd], windowEnd);
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(
  `Length of the longest substring: ${non_repeat_substring("aabccbb")}`
);
console.log(
  `Length of the longest substring: ${non_repeat_substring("abbbb")}`
);
console.log(
  `Length of the longest substring: ${non_repeat_substring("abccde")}`
);

/**
 *  TOPIC: Two Pointers
 */

/**
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:
Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Example 2:
Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
 */

const pair_with_targetsum = function (arr, target_sum) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    const sum = arr[leftPointer] + arr[rightPointer];

    if (sum === target_sum) {
      return [leftPointer, rightPointer];
    }

    if (target_sum > sum) {
      // increase left pointer
      leftPointer++;
    } else {
      // decrease right pointer
      rightPointer--;
    }
  }

  return [-1, -1];
};

/**
Problem Statement #
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Example 1:
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Example 2:
Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
 */

// Time Complexity: O(N)
// Space Complexity: O(1) - Since this is done in place it is constant space.

const remove_duplicates = function (arr) {
  let nextNonDup = 1;
  let i = 0;

  while (i < arr.length) {
    if (arr[nextNonDup - 1] !== arr[i]) {
      arr[nextNonDup] = arr[i];
      nextNonDup += 1;
    }
    i += 1;
  }

  return nextNonDup;
};

/**
Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

Example 1:
Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].

Example 2:
Input: [2, 11, 2, 2, 1], Key=2
Output: 2
Explanation: The first two elements after removing every 'Key' will be [11, 1].
 */

// Time Complexity: O(N)
// Space Complexity: O(1) - Since this is done in place it is constant space.
function remove_element(arr, key) {
  let nextElement = 0; // index of the next element which is not 'key'
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i];
      nextElement += 1;
    }
  }
  return nextElement;
}

/**
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

Example 2:
Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]
 */

// Time Complexity: O(N) N = input array
// Space Complexity: O(N) (since we create a new array with the same length as the input array)
// Approach: Two Pointers

const make_squares = function (arr) {
  const squares = Array(arr.length).fill(0);
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let highestSqrIndex = arr.length - 1;

  while (leftPointer <= rightPointer) {
    let leftSqr = arr[leftPointer] * arr[leftPointer];
    let rightSqr = arr[rightPointer] * arr[rightPointer];

    if (leftSqr > rightSqr) {
      squares[highestSqrIndex] = leftSqr;
      leftPointer += 1;
    } else {
      squares[highestSqrIndex] = rightSqr;
      rightPointer -= 1;
    }

    highestSqrIndex -= 1;
  }

  return squares;
};

/**
 *  TOPIC: Fast & Slow Pointers
 */

// Time Complexity: O(N) N = # of nodes in the list
// Space Complexity: O(1)
// Approach: Fast & Slow Pointers
function has_cycle(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true; // found the cycle
    }
  }
  return false;
}

/*
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’.
All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

Example 1:
Input: 23
Output: true (23 is a happy number)

Example 2:

Input: 12
Output: false (12 is not a happy number)
*/

// Time Complexity: O(logN)
// Space Complexity: O(1)
// Approach: Fast & Slow Pointers
function find_happy_number(num) {
  let slow = num,
    fast = num;
  while (true) {
    slow = find_square_sum(slow); // move one step
    fast = find_square_sum(find_square_sum(fast)); // move two steps
    if (slow === fast) {
      // found the cycle
      break;
    }
  }
  return slow === 1; // see if the cycle is stuck on the number '1'
}

function find_square_sum(num) {
  let sum = 0;
  while (num > 0) {
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

/**
Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
If the total number of nodes in the LinkedList is even, return the second middle node.

Example 1:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: 3

Example 2:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: 4

Example 3:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
Output: 4
 */

// Time Complexity: O(N)
// Space Complexity: O(1)
// Approach: Fast & Slow Pointers
const find_middle_of_linked_list = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

// Time Complexity: O(N) originally O(N) + O(N-1) which can be reduced to O(N)
// Space Complexity: O(1)
// Approach: Cyclic Sort
function cyclic_sort(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  return nums;
}

/**
 * Reverse a Linked List
 */

// Time Complexity: O(N)
// Space Complexity: O(1)
function reverse(head) {
  let current = head,
    previous = null;
  while (current !== null) {
    next = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    previous = current; // before we move to the next node, point previous to the current node
    current = next; // move on the next node
  }
  return previous;
}

/**
 * BFS
 */

// Time Complexity: O(N)
// Space Complexity: O(N)
// Approach: BFS

function find_minimum_depth(root) {
  if (root === null) {
    return 0;
  }

  const queue = [root];
  let minimumTreeDepth = 0;

  while (queue.length > 0) {
    minimumTreeDepth += 1;
    const levelSize = queue.length;
    for (i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      // check if this is a leaf node
      if (currentNode.left === null && currentNode.right === null) {
        return minimumTreeDepth;
      }
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
}

/*
 * DFS
 */

/**
  Binary Tree Path Sum
  Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
 */

// Time Complexity: O(N)
// Space Complexity: O(N) because of the call stack.
// Approach: DFS
function hasPath(root, sum) {
  if (root === null) {
    return false;
  }

  // if the current node is a leaf and its value is equal to the sum, we've found a path
  if (root.val === sum && root.left === null && root.right === null) {
    return true;
  }

  // recursively call to traverse the left and right sub-tree
  // return true if any of the two recursive call return true
  return (
    hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
  );
}

/*
Sum of Path Numbers
Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
 */

// Time Complexity: O(N)
// Space Complexity: O(N) because of the call stack.
// Approach: DFS
function find_root_to_leaf_path_numbers(currentNode, pathSum) {
  if (currentNode === null) {
    return 0;
  }

  // calculate the path number of the current node
  pathSum = 10 * pathSum + currentNode.val;

  // if the current node is a leaf, return the current path sum
  if (currentNode.left === null && currentNode.right === null) {
    return pathSum;
  }

  // traverse the left and the right sub-tree
  return (
    find_root_to_leaf_path_numbers(currentNode.left, pathSum) +
    find_root_to_leaf_path_numbers(currentNode.right, pathSum)
  );
}
