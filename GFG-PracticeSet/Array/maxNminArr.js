/*
Given an array, write functions to find the minimum and maximum elements in it. 
*/


//TC - O(n)
//AS - O(1)
function findMaxAndMin(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(max, arr[i]);
  }
  console.log(`Maximum is ${max} and Minimum is ${min}`);
}

findMaxAndMin([1, 423, 6, 46, 34, 23, 13, 53, 4]);
