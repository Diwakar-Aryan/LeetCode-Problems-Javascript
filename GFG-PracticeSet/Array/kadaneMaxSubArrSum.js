//Sliding window
//whenever sum<0 reset it to 0

function maxSubArrSum(nums) {

  let maxSub = nums[0]
  let currSum = 0
  for (let n of nums) {
    if (currSum < 0) {
      currSum = 0
    }
    currSum += n
    maxSub = Math.max(maxSub, currSum)
  }
  return maxSub
}

let nums = [1, 2, 3, -2, 5]
console.log(maxSubArrSum(nums))