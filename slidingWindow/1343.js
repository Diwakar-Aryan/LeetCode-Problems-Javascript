/**
 * 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 * Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.
 * 
 * Example 1:

   Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
   Output: 3
   Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = function (arr, k, threshold) {


   const thresholdSum = threshold * k

   let res = 0
   // const resArr = []
   let sum = 0

   for (let i = 0; i < k; i++) {
      sum += arr[i]
   }

   if (sum >= thresholdSum) {
      // resArr.push(arr.slice(0, k))
      res++
   }

   for (let i = 1; i < arr.length - k + 1; i++) {

      sum = sum - arr[i - 1] + arr[i + k - 1]
      if (sum >= thresholdSum) {
         // resArr.push(arr.slice(i, i + k))
         res++
      }


   }
   // console.log(resArr);
   
   return res

};


console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4))



