/**
 * 
 * 1189. Maximum Number of Balloons
 * 
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

Example 1:



Input: text = "nlaebolko"
Output: 1
Example 2:



Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0

 */

var maxNumberOfBalloons = function(text) {

    let res =text.length;
     
const ballonMap = new Map()
for (let char of 'balloon') {
    ballonMap.set(char,0)
}

    for(let char of text ) {
        if(ballonMap.has(char)){
            ballonMap.set(char, ballonMap.get(char)+1) 
        }
    }
    
    for(const keyVal of ballonMap.entries()) {
        if(keyVal[0] == 'l' || keyVal == 'o') {
            res = Math.min(res, keyVal[1]/2)
        }
        else {
            res = Math.min(res,keyVal[1])
        }
    }

    return res
    
};

const T1 = maxNumberOfBalloons("loonbalxballpoon")

const T2 = maxNumberOfBalloons("leetcode")
console.log(T2)

const T3 = maxNumberOfBalloons("nlaebolko")
console.log(T3);