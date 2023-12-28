//O(n^2)

function selectionSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let smallestIndex = i;
    for (let j = i; j < n; j++) {
      if (nums[j] < nums[i]) {
        smallestIndex = j;
      }
    }
    let temp = nums[i];
    nums[i] = nums[smallestIndex];
    nums[smallestIndex] = temp;
  }
}

let nums = [5, 4, 7, 3, 9, 12, 10, 2];
selectionSort(nums);
console.log(nums);
