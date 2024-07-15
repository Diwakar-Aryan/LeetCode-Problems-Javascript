//O(nlogn)
//Divide and conquer approach using recursion

function mergeSortAlgorithm(nums, l, r) {
  if (l >= r) {
    return;
  }
  let mid = l + parseInt((r - l) / 2);
  mergeSortAlgorithm(nums, l, mid);
  mergeSortAlgorithm(nums, mid + 1, r);
  merge(nums, l, mid, r);
}

function merge(nums, l, mid, r) {
  let n1 = mid - l + 1;
  let n2 = r - mid;
  let larr = new Array(n1);
  let rarr = new Array(n2);

  //copying data to temp arr
  for (let i = 0; i < n1; i++) {
    larr[i] = nums[l + i];
  }
  for (let j = 0; j < n2; j++) {
    rarr[j] = nums[mid + 1 + j];
  }
  let i = 0;
  let j = 0;
  let k = l;
  while (i < n1 && j < n2) {
    if (larr[i] <= rarr[j]) {
      nums[k] = larr[i];
      i = i + 1;
    } else {
      nums[k] = rarr[j];
      j = j + 1;
    }
    k++;
  }
  while (i < n1) {
    nums[k] = larr[i];
    i = i + 1;
    k = k + 1;
  }
  while (j < n2) {
    nums[k] = rarr[j];
    j = j + 1;
    k = k + 1;
  }
}

let nums = [12, 11, 13, 5, 6, 7];

mergeSortAlgorithm(nums, 0, nums.length - 1);

console.log(nums);
