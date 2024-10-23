const removeDuplicates = function (arr) {
  let fp = 1;
  let sp = 1; //iterator
  while (sp < arr.length) {
    if (arr[fp - 1] !== arr[sp]) {
      arr[fp] = arr[sp];
      fp++;
    }
    sp++;
  }
  console.log(arr);
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
