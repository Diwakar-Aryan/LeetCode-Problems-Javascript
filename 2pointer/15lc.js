//O(n**2)


var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    let target = 0 - nums[i];
    searchPair(nums, target, i + 1, triplets);
  }
  console.log(triplets);
};

function searchPair(nums, target, start, triplets) {
  let end = nums.length - 1;
  while (start < end) {
    const currentSum = nums[start] + nums[end];
    if (currentSum === target) {
      triplets.push([-target, nums[start], nums[end]]);
      start++;
      end--;
      while (start < end && nums[start] == nums[start - 1]) {
        start++;
      }
      while (start < end && nums[end] == nums[end + 1]) {
        end--;
      }
    } else if (target > currentSum) {
      start++;
    } else if (target < currentSum) {
      end--;
    }
  }
}

threeSum([-1, 0, 1, 2, -1, -4]);
