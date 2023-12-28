var productExceptSelf = function (nums) {
  let n = nums.length;
  let res = [];
  //Initializing the left hand side product
  res[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    res[i] = nums[i - 1] * res[i - 1];
  }
  let leftRes = [];
  leftRes[nums.length - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    leftRes[i] = nums[i + 1] * leftRes[i + 1];
  }
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i] * leftRes[i];
  }
  console.log(res);
};
productExceptSelf([1, 2, 3, 4]);
