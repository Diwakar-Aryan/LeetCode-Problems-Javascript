const shortestWindowSort = function (arr) {
  let low = 0;
  let high = arr.length - 1;

  //Find the first number out of sorting order from beginning
  while (low < arr.length - 1) {
    low++;
    if (arr[low] < arr[low - 1]) {
      break;
    }
  }

  //find the first number out of sorting order from end
  while (high > -1) {
    high--;
    if (arr[high] >= arr[high + 1]) {
      break;
    }
  }

  if (low === arr.length - 1 && arr.length !== 2) {
    return 0;
  }
  if(low === arr.length -1  && arr.length === 2) {
    if(arr[0] > arr[1]) return 1
    if(arr[1] > arr[0]) return 0
  }

  //Find max and min of subarray
  let subArrayMax = -Infinity;
  let subArrayMin = Infinity;
  for (let k = low; k < high + 1; k++) {
    subArrayMax = Math.max(subArrayMax, arr[k]);
    subArrayMin = Math.min(subArrayMin, arr[k]);
  }

  //extend the subarray to include any number which is bigger than minimum of subarray
  while (low > 0 && arr[low - 1] > subArrayMin) {
    low--;
  }
  //extend the subarray to include any number which is small than the maximum of the subarray

  while (
    high < arr.length - 1 &&
    arr[high + 1] < subArrayMax &&
    arr[high + 1] !== arr[low - 1]
  ) {
    high++;
  }
  console.log(high, low);
  if (low === 0 && high === arr.length - 1) {
    return arr.length - 1;
  }
  if (low === arr.length - 1 && high === 0 && arr.length === 2) {
    return 1;
  }

  return high - low + 1;
};

let arr = [1, 2, 3, 10, 4, 2, 3, 5];
// console.log(shortestWindowSort([1, 2, 5, 3, 7, 10, 9, 12]));
// console.log(shortestWindowSort([1, 2, 3, 10, 4, 2, 3, 5]));
console.log(shortestWindowSort([1, 2, 3]));
