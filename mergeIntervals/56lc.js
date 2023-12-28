var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let previous = intervals[i - 1];
    if (current[0] <= previous[1]) {
      intervals[i] = [previous[0], Math.max(previous[1], current[1])];
      intervals.splice(i - 1, 1);
      i--;
    }
  }
  console.log(intervals);
  return intervals;
};

merge([
  [1, 4],
  [2, 6],
  [3, 5],
]);
