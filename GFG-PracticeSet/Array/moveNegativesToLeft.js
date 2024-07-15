function moveNegative(nums) {
  let fp = 0
  let sp = 1
  while (sp < nums.length) {
    if (nums[fp] < 0) {
      fp++
    }
    if (nums[sp] < 0 && nums[fp] > 0) {
      swap(nums, fp, sp)
    }
    sp++
  }
}

function swap(arr, first, second) {
  let temp = arr[first]
  arr[first] = arr[second]
  arr[second] = temp
}


let nums = [-1, 2, -3, 4, 5, 6, -7, 8, 9]
moveNegative(nums)
console.log(nums);