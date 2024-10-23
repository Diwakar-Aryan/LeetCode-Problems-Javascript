const findMaxAverage = function (arr, k) {
  const results = [];
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    //
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      results.push(windowSum / k);

      windowSum -= arr[windowStart];

      windowStart++;
    }
  }
  console.log(results);
};

let nums = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let k = 5;
findMaxAverage(nums, k);
