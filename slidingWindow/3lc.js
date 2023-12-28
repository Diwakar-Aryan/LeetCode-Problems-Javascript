function nonRepeatSubstring(str) {
  let windowStart = 0;
  let maxLen = 0;
  let charIndexMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const endChar = str[windowEnd];

    //if the map already contains the endChar,
    //shrink the window from the beginning
    //so that we only have on occurance of endChar
    if (endChar in charIndexMap) {
      //this is tricky; in the current window,
      //we will not have any endChar after
      //it's previous index. and if windowStart
      //is already ahead of the last index of
      //endChar, we'll keep windowStart

      console.log("Pre", windowStart);
      windowStart = Math.max(windowStart, charIndexMap[endChar] + 1);
      console.log("Post", windowStart);
    }
    //Insert the endchar in map
    charIndexMap[endChar] = windowEnd;

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }
  return maxLen;
}
nonRepeatSubstring("aabccbb"); //3
// nonRepeatSubstring("abbbb"); //2
// nonRepeatSubstring("abccde"); //3
