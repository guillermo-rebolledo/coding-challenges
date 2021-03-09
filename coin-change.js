/*
322. Coin Change
https://leetcode.com/problems/coin-change/

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0

Example 4:
Input: coins = [1], amount = 1
Output: 1

Example 5:
Input: coins = [1], amount = 2
Output: 2

Constraints:
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
 */

// Bottom Up Solution
var coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  
  for (let currentAmount = 1; currentAmount < dp.length; currentAmount++) {
    for (const coin of coins) {
      if (currentAmount - coin >= 0) {
        dp[currentAmount] = Math.min(dp[currentAmount], dp[currentAmount - coin] + 1);
      } 
    }
  }
  
  return dp[amount] === Infinity ? - 1 : dp[amount]; 
}

// Top Down Solution
var coinChange = function(coins, amount) {
  // Define a HashMap that will serve as cache
  const cache = new Map();
  
  // define aux function to get the result
  const getMinCoins = (amount) => {
    // if the amount given is already in cache, return that value
    if (cache.has(amount)) {
      return cache.get(amount);
    }
    
    // If the amount is 0, then there's 0 coins we can return
    if (amount === 0) {
      return 0;
    }
    
    // Define a min variable which will hold the value of the minimum amount of coins possible for the amount
    let min = Infinity;
    
    // We iterate through the coins array, this is to see the different variations of results and minimum
    // In the example of coins = [1, 2, 5]: (amount - 1), (amount - 2) & (amount - 5)
    // Since this is the top down approach, we go down to the base cases (depth first manner)
    for (const coin of coins) {
      if (amount - coin >= 0) {
        min = Math.min(min, getMinCoins(amount - coin));
      }
    }
    
    // Once we get the minimum, we return it and ADD 1 (since we are using the minimum PLUS one coin)
    cache.set(amount, min + 1);
    return min + 1;
  };
  
  const result = getMinCoins(amount);
  // If we dont find the coins to get the amount asked, we return -1
  return result === Infinity ? - 1 : result;
};
