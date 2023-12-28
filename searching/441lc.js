/*
441. Arranging Coins
You have n coins and you want to build a staircase with these coins.
The staircase consists of k rows where the ith row has exactly i coins.
The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.

Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
*/

var arrangeCoins = function (n) {
  let low = 1;
  let high = n;
  let mid;

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (n >= (mid * (mid + 1)) / 2) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low - 1;
};

arrangeCoins(7);
arrangeCoins(5);
arrangeCoins(8);
