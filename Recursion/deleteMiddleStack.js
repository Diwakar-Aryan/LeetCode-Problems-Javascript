/*
Delete middle element from stack from bottom
Eg. - [1,2,3,4,5] -> [1,2,4,5]
*/

function deleteElement(arr, i, res = []) {
  if (i == arr.length - 1) {
    return;
  }
  if (arr.length % 2 == 0) {
    if (i == arr.length / 2) {
      deleteElement(arr, i + 1, res);
    }
  } else {
    if (i == Math.ceil(arr.length / 2)) {
      deleteElement(arr, i + 1, res);
    }
  }
  res.push(arr[i]);
  deleteElement(arr, i + 1, res);
}
let res = [];
deleteElement([1, 2, 3, 4], 0, res);
console.log(res);
