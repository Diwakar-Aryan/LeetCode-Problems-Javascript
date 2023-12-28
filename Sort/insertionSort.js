//O(n^2)

function insertionSort(nums) {
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    let currValue = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > currValue) {
      nums[j + 1] = nums[j];
      j = j - 1;
    }
    nums[j + 1] = currValue;
  }
}

let nums = [5, 4, 2, 3];
insertionSort(nums);
console.log(nums);
