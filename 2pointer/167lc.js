const twoSum = function (numbers, target) {
  let low = 0;
  let high = numbers.length - 1;
  let resArr = [];
  while (low < high) {
    let currSum = numbers[low] + numbers[high];
    if (currSum == target) {
      resArr = [low, high];
      break;
    } else if (currSum > target) {
      high--;
    } else {
      low++;
    }
  }
  return resArr;
};

console.log(twoSum([2, 7, 11, 15], 18));
