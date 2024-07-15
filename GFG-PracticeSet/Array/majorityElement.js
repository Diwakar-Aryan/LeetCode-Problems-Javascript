// Boyer–Moore majority vote algorithm. 

function majorityElement(nums) {
  let res = 0
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (i == 0 || count == 0) {
      res = nums[i]
      count++
    } else if (nums[i] === res) {
      count++
    } else {
      count--
    }
  }
  console.log(res);
}

majorityElement([2, 2, 1, 1, 1,])