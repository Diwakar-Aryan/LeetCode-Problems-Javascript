/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.
*/

function longestSubstringWithKdistinct(str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const endChar = str[windowEnd];
    if (!(endChar in charFrequency)) {
      charFrequency[endChar] = 0;
    }
    charFrequency[endChar]++;
    while (Object.keys(charFrequency).length > k) {
      const startChar = str[windowStart];
      charFrequency[startChar]--;

      if (charFrequency[startChar] === 0) {
        delete charFrequency[startChar];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(longestSubstringWithKdistinct("araaci", 2)); //4, The longest substring with no more than '2' distinct characters is "araa".
console.log(longestSubstringWithKdistinct("araaci", 1)); //2, The longest substring with no more than '1' distinct characters is "aa".
console.log(longestSubstringWithKdistinct("cbbebi", 3));
