/**
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

 
 /**
  **********************************************
  *     Top Down Solution w/Memoization        *
  **********************************************
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

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

 /**
  **********************************************
  *             Bottom Up Solution             *
  **********************************************
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
  // We define a table (array) to help us solve the subproblems from 0 to amount
  const dp = Array(amount + 1).fill(Infinity);
  // We initialize dp at index 0 as 0 since we need 0 coins to get 0 amount
  dp[0] = 0;
  
  // We iterate through the dp array we just created (of length = amount + 1)
  // We start from index 1, since we just assigned dp[0] = 0
  for (let currentAmount = 1; currentAmount < dp.length; currentAmount++) {
    // We iterate through the array of coins to get the minimum across all variations of coins possible
    for (const coin of coins) {
      // We need to check if the current amount we are checking MINUS the value of the coin is not less than 0
      // If it is, then the dp at the currentAmount index is left as Infinity (which later would be transofrmed to -1 when returning)
      if (currentAmount - coin >= 0) {
        // we assign the minimum between dp at currentAmount index or dp at the current amount - the value of the current coin PLUS 1, since we are using a coin
        dp[currentAmount] = Math.min(dp[currentAmount], dp[currentAmount - coin] + 1);
      } 
    }
  }
  
  return dp[amount] === Infinity ? - 1 : dp[amount]; 
}