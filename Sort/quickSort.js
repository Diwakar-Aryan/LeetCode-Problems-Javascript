/*
i) Make any element the pivot
ii) Partition the array based on pivot
iii) Apply step i & ii on left partition repeatedly
iv) Apply step i && ii on right partition repeatedly
*/

//TC - O(NlogN)
function partition(nums, l, r) {
  const pivotIndex = Math.floor(l + (r - l) / 2)
  while (nums[l] < nums[pivotIndex]) {
    l++
  }
  while (nums[r] > nums[pivotIndex]) {
    r--
  }
  if (l <= r) {
    [nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
  return l;
}


function quickSort(nums, l, r) {
  l = l || 0
  r = r || nums.length - 1

  const pivot = partition(nums, l, r)
  if (l < pivot - 1) {
    quickSort(nums, l, pivot - 1)
  }
  if (r > pivot) {
    quickSort(nums, pivot, r)
  }
}
let nums = [8, 6, 3, 5, 78, 3, 4, 1]
quickSort(nums)
console.log(nums);