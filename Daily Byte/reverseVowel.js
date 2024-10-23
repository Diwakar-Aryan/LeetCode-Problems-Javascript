/** 
 * 
 *  Given a string, reverse the vowels of it.
 * Note: In this problem y is not considered a vowel.
 * 
 * Case 1:
 * s = "computer", return "cemputor"
 * 
 * Case 2:
 * s = "The Daily Byte", return "The Dialy Byte"
 * 
 */

const reverseVowel = (str) => {

   const strArr = str.split("")
   const set = new Set(['a', 'e', 'i', 'o', 'u'])
   const vowelArr = []

   for (let i = 0; i < strArr.length; i++) {
      let str = strArr[i]
      if (set.has(str)) {
         vowelArr.push(i)
      }
   }

   let l = 0, r = vowelArr.length - 1

   while (l < r) {
      const temp = strArr[vowelArr[l]]
      strArr[vowelArr[l]] = strArr[vowelArr[r]]
      strArr[vowelArr[r]] = temp
      l++;
      r--;
   }

   return (strArr.join(''));



}

const T1 = reverseVowel("computer")
const T2 = reverseVowel("The Daily Byte")

console.log(T1, T2);
