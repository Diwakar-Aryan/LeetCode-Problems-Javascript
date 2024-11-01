/**
 * 
 * 367. Valid Perfect Square
 * 
 * Given a positive integer num, return true if num is a perfect square or false otherwise.
 * 
 * A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
 * You must not use any built-in library function, such as sqrt.
 * 
 * Example 1:

	Input: num = 16
	Output: true
	Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

 * Example 2:

	Input: num = 14
	Output: false
	Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
    let l = 0
    let r = num - 1

    while(l < r) {
    	let mid = l + Math.floor((r-l)/2)

    	if(mid*mid > num) {
    		r = mid - 1
    	}
    	else if(mid * mid < num) {
    		l = mid
    	} else {
    		return true;
    	}
    }
    return false;
};

const T1 = isPerfectSquare(16)
const T2 = isPerfectSquare(14)
console.log( T1, T2)