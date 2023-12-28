var totalFruits = function (fruits) {
  let windowStart = 0;
  let maxLen = 0;
  let fruitMap = new Map();

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    let endFruit = fruits[windowEnd];
    fruitMap.set(endFruit, fruitMap.get(endFruit) + 1 || 1);

    //Shrink the sliding window until we are left with two fruits in fruitmap
    while (fruitMap.size > 2) {
      let startFruit = fruits[windowStart];
      fruitMap.set(startFruit, fruitMap.get(startFruit) - 1);
      if (fruitMap.get(startFruit) === 0) {
        fruitMap.delete(startFruit);
      }
      windowStart++;
    }
    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }
  return maxLen;
};

console.log(totalFruits([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
console.log(totalFruits([1, 2, 1]));
console.log(totalFruits([0, 1, 2, 2]));
console.log(totalFruits([1, 2, 3, 2, 2]));
