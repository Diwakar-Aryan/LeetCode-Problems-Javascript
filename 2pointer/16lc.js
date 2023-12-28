function tripletSumCloseToTarget(arr, target) {
  arr.sort((a, b) => a - b);
  let smallestDifference = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1;

    while (start < end) {
      const targetDifference = target - arr[i] - arr[start] - arr[end];
      if (targetDifference === 0) {
        return target - targetDifference;
      }

      if (Math.abs(targetDifference) < Math.abs(smallestDifference)) {
        smallestDifference = targetDifference;
      }

      if (
        Math.abs(targetDifference) < Math.abs(smallestDifference) ||
        (Math.abs(targetDifference) === Math.abs(smallestDifference) &&
          targetDifference > smallestDifference)
      ) {
        smallestDifference = targetDifference;
      }

      if (targetDifference > 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  console.log(target - smallestDifference);
  return target - smallestDifference;
}

tripletSumCloseToTarget([-2, 0, 1, 2], 2); //1, he triplet [-2, 1, 2] has the closest sum to the target.
tripletSumCloseToTarget([-3, -1, 1, 2], 1); //0, The triplet [-3, 1, 2] has the closest sum to the target.
tripletSumCloseToTarget([1, 0, 1, 1], 100); //3, The triplet [1, 1, 1] has the closest sum to the target.
tripletSumCloseToTarget([-1, 2, 1, -4], 1); //2, The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
