let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let res = []
let i = 0
while (i < arr.length) {
  let flag = true
  if (flag) {
    res.push(arr.slice(i, i+2))
    flag = false
    i = i + 2
  }
  if (!flag) {
    res.push(arr.slice(i,i+3))
    flag = true
    i = i + 3

  }
}
console.log(res);