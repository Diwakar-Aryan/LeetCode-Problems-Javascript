/**
 * Given two strings s and t return whether or not s is a subsequence of t.
 * Given two strings s and t return whether or not s is a subsequence of t.
 * 
 * Ex: Given the following strings s and t…
 * 
 * s = "abc", t = "aabbcc", return true.
 * s = "cpu", t = "computer", return true.
 * s = "xyz", t = "axbyc", return false.
*/

const ifSubsequece = function(s, t) {
	let counter = 0
	for(let char of t) {
		if(s[counter] === char) {
			counter++
		}
	}
	if(counter < s.length) {
		return false
	}
	return true
}

const T1 = ifSubsequece("abc", "aabbcc")
const T2 = ifSubsequece("cpu", "computer")
const T3 = ifSubsequece("xyz", "axbyc")
console.log(T1, T2, T3)
