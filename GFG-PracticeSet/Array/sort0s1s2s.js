function sort012(arr) {
  let l = 0
  let m = 0
  let r = arr.length - 1

  while (m <= r) {
    if (arr[m] == 0) {
      swap(arr, l, m)
      l++
      m++
    } else if (arr[m] == 2) {
      swap(arr, r, m)
      r--
    } else {
      m++
    }
  }
}

function swap(arr, first, second) {
  let temp = arr[first]
  arr[first] = arr[second]
  arr[second] = temp
}




let arr = [0, 1, 0]
sort012(arr)
console.log(arr);