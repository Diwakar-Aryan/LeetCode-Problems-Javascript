//O(n^2)

function bubbleSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
}
//bubbleSort a bit optimized

function bubbleSortOptimized(nums) {
  let n = nums.length;
  let elementSwapped;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      elementSwapped = false;
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        elementSwapped = true;
      }
    }
    if (!elementSwapped) {
      console.log(i);
      break;
    }
  }
}

let nums = [5, 2, 3];
bubbleSortOptimized(nums);
console.log(nums);
