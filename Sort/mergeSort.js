//O(nlogn)
//Divide and conquer approach using recursion

function mergeSortAlgorithm(nums, l, r) {
  if (l >= r) {
    return;
  }
  let mid = l + parseInt((r - l) / 2);
  mergeSortAlgorithm(nums, l, mid);
  mergeSortAlgorithm(nums, mid + 1, r);
  mergeSortAlgorithm();
}

function merge(nums, l, mid, r) {
  let n1 = mid - l + 1;
  let n2 = r - mid;
  let X = new Array(n1),
    Y = new Array(n2);
  for (let i = 0; i < n1; i++) {
    X[i] = nums[l + i];
  }
  for (let j = 0; j < n2; j++) {
    Y[j] = nums[mid + 1 + j];
  }
  let i = 0;
  j = 0;
  k = 1;
  while (i < n1 && j < n2) {
    if (X[i] <= Y[j]) {
      nums[k] = X[i];
      i = i + 1;
    } else {
      nums[k] = Y[j];
      j = j + 1;
    }
    k++;
  }
  while (i < n1) {
    nums[k] = X[i];
    i = i + 1;
    k = k + 1;
  }
  while (j < n2) {
    nums[k] = Y[j];
    j = j + 1;
    k = k + 1;
  }
}

let nums = [12, 11, 13, 5, 6, 7];

mergeSortAlgorithm(nums, 0, 4);

console.log(nums);
