/**
 * 1052. Grumpy Bookstore Owner
 * There is a bookstore owner that has a store open for n minutes. You are given an integer array customers of length n where customers[i] is the number of the customers that enter the store at the start of the ith minute and all those customers leave after the end of that minute.

During certain minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.

When the bookstore owner is grumpy, the customers entering during that minute are not satisfied. Otherwise, they are satisfied.

The bookstore owner knows a secret technique to remain not grumpy for minutes consecutive minutes, but this technique can only be used once.

Return the maximum number of customers that can be satisfied throughout the day.
Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3

Output: 16

Explanation:

The bookstore owner keeps themselves not grumpy for the last 3 minutes.

The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

 */

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
const maxSatisfied = function (customers, grumpy, minutes) {

   let l = 0, max_window = 0, satisfied = 0, window = 0

   for (let r = 0; r < customers.length; r++) {
      if (grumpy[r]) {
         window += customers[r]
      } else {
         satisfied += customers[r]
      }
      if (r - l + 1 === minutes) {
         if (grumpy[l]) {
            window -= customers[l]
         }
         l = l + 1
         max_window = Math.max(max_window, window)
      }
   }
   return max_window + satisfied

};

const customers = [1, 0, 1, 2, 1, 1, 7, 5], grumpy = [0, 1, 0, 1, 0, 1, 0, 1], minutes = 3

console.log(maxSatisfied(customers, grumpy, minutes));
