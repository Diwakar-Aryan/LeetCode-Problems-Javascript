function lengthOfLongestSubstring(str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let maxRepeatLetterCount = 0;
  let charFrequency = {};

  //Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const endChar = str[windowEnd];
    if (!(endChar in charFrequency)) {
      charFrequency[endChar] = 0;
    }
    charFrequency[endChar]++;
    //*REVIEW THIS LINE*
    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      charFrequency[endChar]
    );

    //current window size is from windowStart to windowEnd, overall we have a letter which is
    //repeating maxRepeatLetterCount times, this mean we can have a window which has one letter
    //repeating maxRepeatLetterCount times and the remaining letters we should replace
    //if the remaining letters are more than k, it is the time to shrink the window as we
    //are not allowed to replace more than k letters
    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      const startChar = str[windowStart];
      charFrequency[startChar]--;
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  console.log(maxLength);
}

lengthOfLongestSubstring("aabccbb", 2); //5, Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
lengthOfLongestSubstring("abbcb", 1); //4, Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
lengthOfLongestSubstring("abccde", 1); //3, Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
