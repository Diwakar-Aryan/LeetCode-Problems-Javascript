/*
Given an array (or string), the task is to reverse the array/string.
Examples :

Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
*/


//TC - O(n)
//AS -O(1)

function reverseArr(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
  }
  console.log(arr);
}
let arr = [4, 5, 1, 2];
reverseArr(arr);
