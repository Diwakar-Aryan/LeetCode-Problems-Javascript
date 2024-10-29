
/**
 * Given two strings, passage and text return whether or not the characters in text can be used to form the given passage.
 * Each character in text may only be used once and passage and text will only contain lowercase alphabetical characters.
 * Ex: Given the following passage and text… 
 * passage = "bat", text = "cat", return false.
 * 
 * passage = "dog" text = "didnotgo", return true.
 */
const characterScramble = function (passage, text) {

	const characterMap = new Map()

	for (let char of passage ) {
		if(characterMap.has(char)) {
			characterMap.set(char, characterMap.get(char) +1)
		} else {
			characterMap.set(char , 1 )
		}
	}
	
	for(let char of text) {
		if(characterMap.has(char) && characterMap.get(char)) {
			characterMap.set(char, characterMap.get(char) - 1)
		}
	}

	for(const [key, value] of characterMap) {
		if(value > 0) {
			return false
		}
	}
	return true
}
const T1 = characterScramble('dog', "didnotgo")
const T2 = characterScramble('bat', "cat")

console.log(T1, T2)
