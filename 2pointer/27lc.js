function removeElement(nums, val) {
  let valIndex = 0;
  let duplicateCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      duplicateCount++;
    } else {
      nums[valIndex++] = nums[i];
    }
  }
  console.log(nums, duplicateCount);
}

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
