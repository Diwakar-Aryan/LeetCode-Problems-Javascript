/*
Given an array containing N positive integers and an integer K. Your task is to find the length of the longest Sub-Array with sum of the elements equal to the given value K.

Input:
7 5
4 1 1 1 2 3 5
Output: 
4
*/

function largestSubarray(arr, k) {
  let max = 0;
  let i = 0;
  let j = 0;
  let sum = 0;
  while (j < arr.length && i <= j) {
    if (sum < k) {
      sum = sum + arr[j];
      j++;
    } else if (sum > k) {
      sum = sum - arr[i];
      i++;
    } else {
      console.log(max, j - i, "max");
      max = Math.max(max, j - i);
      j++;
    }
    console.log(i, j, sum, max);
  }
  console.log(max);
}
largestSubarray([4, 1, 1, 1, 2, 3, 5], 5);
