/**
 *    1
 *    1 1
 *    1 2 1
 *    1 3 3 1
 *    1 4 6 4 1
 * 
 * 
 * @param {*} numRows 
 * @returns 
 */

var generateTri = function (numRows) {

   const res = [[1]]
   
   for(let i =1 ; i < numRows; i++) {
      res[i] = []

      for(let k = 0; k<i+1; k++){
         res[i][k] = (res[i-1][k] || 0) + (res[i-1][k-1] || 0)
      }

   }
   return res
   
};


const T1 = generateTri(5)
console.log(T1)