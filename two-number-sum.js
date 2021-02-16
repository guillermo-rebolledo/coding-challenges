// O(n^2) time
// O(1) space

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    const lookFor = targetSum - array[i];
    const indexFound = array.indexOf(lookFor);
    if (indexFound !== i && indexFound !== -1) {
      return [array[i], array[indexFound]];
    }
  }
  return [];
}

// O(n) time
// O(n) space

function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }

  return [];
}

// O(nlog(n)) time
// O(1) space

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentsum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentsum < targetSum) {
      left++;
    } else if (currentsum > targetSum) {
      right--;
    }
  }

  return [];
}
