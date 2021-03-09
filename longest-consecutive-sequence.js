/**
 * 128. Longest Consecutive Sequence
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * Follow up: Could you implement the O(n) solution?

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
0 <= nums.length <= 104
-109 <= nums[i] <= 109
 */

function longestConsecutive(nums) {
  const numSet = new Set();

  for (const num of nums) {
    numSet.add(num);
  }

  let best = 0;
  for (const num of numSet.values()) {
    if (!numSet.has(num - 1)) {
      let newTarget = num + 1;
      while (numSet.has(newTarget)) {
        newTarget += 1;
      }
      best = Math.max(best, newTarget - num);
    }
  }

  return best;
}
