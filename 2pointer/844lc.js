function backspaceCompare(s, t) {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    let i = getNextChar(s, p1);
    let j = getNextChar(t, p2);
    if (i < 0 && j < 0) {
      return true;
    }

    if (i < 0 || j < 0) {
      return false;
    }

    if (s[i] !== t[j]) {
      return false;
    }
    p1 = i - 1;
    p2 = j - 1;
  }
  return true;
}
function getNextChar(str, index) {
  let backspaceCount = 0;
  while (index >= 0) {
    if (str[index] === "#") {
      backspaceCount++;
    } else if (backspaceCount > 0) {
      backspaceCount--;
    } else {
      break;
    }
    index--;
  }
  return index;
}
backspaceCompare("xy#z", "xzz#"); //true, After applying backspaces the strings become "xz" and "xz" respectively.
backspaceCompare("xy#z", "xyz#"); //false, After applying backspaces the strings become "xz" and "xy" respectively.
backspaceCompare("xp#", "xyz##"); //true, After applying backspaces the strings become "x" and "x" respectively.  In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
backspaceCompare("xywrrmp", "xywrrmu#p"); //true, After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.
