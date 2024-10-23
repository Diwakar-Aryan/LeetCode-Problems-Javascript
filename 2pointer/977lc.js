const sortedSquares = function (nums) {
  let n = nums.length;
  let squares = Array(nums.length).fill(0);
  let highestSquareIndex = n - 1;
  let start = 0;
  let end = n - 1;
  while (start <= end) {
    let startSqr = nums[start] ** 2;
    let endSqr = nums[end] ** 2;
    if (startSqr > endSqr) {
      squares[highestSquareIndex] = startSqr;
      start++;
    } else {
      squares[highestSquareIndex] = endSqr;
      end--;
    }
    highestSquareIndex--;
  }
  console.log(squares);
};
nums = [-4, -1, 0, 3, 10];

sortedSquares(nums);
