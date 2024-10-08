/**
 * 441. Arranging Coins
 * You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
 * 
 * Given the integer n, return the number of complete rows of the staircase you will build.

Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.

Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
 */


/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {


   let l = 0;
   let r = n - 1

   let res = 0
   while (l <= r) {
      let mid = l + Math.floor((r - l) / 2)
      let coins = (mid / 2) * (mid + 1)

      if (coins > n) {
         r = mid - 1
      } else {
         l = mid + 1
         res = Math.max(mid, res)
      }
   }
   return res
};
const T1 = arrangeCoins(7);
const T2 = arrangeCoins(5);
const T3 = arrangeCoins(8);

console.log(T1, T2, T3);
