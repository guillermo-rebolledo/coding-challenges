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
