//Other way to solve this is through Boyer–Moore majority vote algorithm
/*
    We can find the majority element using linear time and constant space using the Boyer–Moore majority vote algorithm. The algorithm can be expressed in pseudocode as the following steps:

    Initialize an element m and counter i =0
    for each element x of input sequence:
    if i==0 then 
        assign m = x and i = 1
    else 
        if m = x, then assign i = i+1
    else
        assign i =i -1
    return m
*/

//TC - O(N) SC - O(N)
const majorityElementNaive = function (nums) {
  let elemFreq = {};
  let majorityNumber = nums.length / 2;
  let element;
  for (let i of nums) {
    if (elemFreq[i] === undefined) {
      elemFreq[i] = 1;
    } else {
      elemFreq[i] = elemFreq[i] + 1;
    }
  }
  for (let i in elemFreq) {
    if (elemFreq[i] >= majorityNumber) {
      element = i;
      break;
    }
  }
  return element;
};

console.log(majorityElementNaive([2, 2, 1, 1, 1, 2, 2]));
