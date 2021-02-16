/**
Branch Sums

Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.
A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

Sample Input
tree =     1
        /     \
       2       3
     /   \    /  \
    4     5  6    7
  /   \  /
 8    9 10

Sample Output
[15, 16, 18, 10, 11]
// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7
 */

// O(n) time - where n is the number of nodes in the Binary Tree
// O(n) space
function branchSums(root) {
  // Declare an emppty array in which we will store the sums of all the branches.
  const result = [];
  // On the first call, the currentSum will be 0.
  calculateBranchSums(root, 0, result);
  return result;
}

//  I create a helper function that calculates the current sum of the branch
//  The algorithm keeps track of the running sum of the nodes that we have traversed
//  so we can just add the current node value to that sum. When we don't have any more child nodes,
//  then we push the current sum + the current value to the result array.
// I am doing this recursively via DFS.
function calculateBranchSums(node, currentSum, result) {
  if (!node) {
    return;
  }

  //  We are on a new node so we add its value to the running/current sum of the branch.
  const newCurrentSum = currentSum + node.value;

  //  If we dont have any child nodes on the left and right, then we can push the sum that we have so far to the result array
  if (!node.left && !node.right) {
    result.push(newCurrentSum);
  }

  //  If there is more child nodes in left and right branches, then we call the function again now with the updated sum that we have so far.
  calculateBranchSums(node.left, newCurrentSum, result);
  calculateBranchSums(node.right, newCurrentSum, result);
}
