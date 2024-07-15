let arr = [- 5, -2, 5, 2, 4, 7, 1, 8, 0, -8]

// TODO: 
function rearrange(arr) {
   let pp = 0
   let np = pp + 1
   while (np < arr.length && pp < arr.length) {
      if (arr[np] < 0 && arr[pp] < 0) {
         pp++
         continue
      }
      if (arr[np] < 0) {
         swap(arr, pp, np)
         //find next positive
         while (pp < arr.length && arr[pp] < 0) {
            pp++
         }
         //find next negative
         while (np < arr.length && arr[np] > 0) {
            np++
         }
      }

   }
}

function swap(arr, fi, si) {
   [arr[fi], arr[si]] = [arr[si], arr[fi]]
}

rearrange(arr)
console.log(arr);