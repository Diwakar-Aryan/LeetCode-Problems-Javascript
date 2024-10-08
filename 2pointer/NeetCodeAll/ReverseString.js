//This is logic but in Javascript string are immutable so cant be done

const reverseString = function (str) {
  let fp = 0,
    sp = str.length - 1;

  while (fp <= sp) {
    let fValue = str[fp];
    let sValue = str[sp];
    str[fp] = sValue;
    str[sp] = fValue;
    fp++;
    sp--;
  }
  return str;
};

console.log(reverseString("abcdefgh"));
