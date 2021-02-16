// cubic solution 
// O(n^3)

function maxSubArrayCubic(nums = []) {
  const n = nums.length;
  let maximumSubArraySum = Number.MIN_SAFE_INTEGER;

  for(let left = 0; left < n; left++) {
    for(let right = left; right < n; right++) {
      let windowSum = 0;

      for(let k = left; k <= right; k++) {
        windowSum = windowSum + nums[k];
        // console.log('windowSum:', windowSum);
      }

      maximumSubArraySum = Math.max(maximumSubArraySum, windowSum);
      // console.log('maximumSubArraySum:', maximumSubArraySum);
    }
  }

  return maximumSubArraySum;
}


console.log(maxSubArrayCubic([-2,1,-3,4,-1,2,1,-5,4]));

function maxSubarrayQuadratic(nums = []) {
  let maxSoFar = nums[0];
  let maxEndigHere = nums [0];

  for(let i = 1; i < nums.length; i++) {
    maxEndigHere = Math.max(maxEndigHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndigHere);
  }

  return maxSoFar;
}

console.log(maxSubarrayQuadratic([-2,1,-3,4,-1,2,1,-5,4]));

function maxSubArrayLinear(nums = []) {
  const n = nums.length;
  let maximumSubArraySum = Number.MIN_SAFE_INTEGER;

  for(let left = 0; left < n; left++) {
    let runningWindowSum = 0;

    for(let right = left; right < n; right++) {
      runningWindowSum = runningWindowSum + nums[right];
      // console.log('runningWindowSum: ', runningWindowSum);

      maximumSubArraySum = Math.max(maximumSubArraySum, runningWindowSum);
      // console.log('maximumSubArraySum: ', maximumSubArraySum);
    }
  }

  return maximumSubArraySum;
}

console.log(maxSubArrayLinear([-2,1,-3,4,-1,2,1,-5,4]));