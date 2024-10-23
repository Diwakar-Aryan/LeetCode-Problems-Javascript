/*
A binary watch has 4 LEDs on the top to represent the hours (0-11), 
and 6 LEDs on the bottom to represent the minutes (0-59).
 Each LED represents a zero or one, with the least significant bit on the right.
*/

function bitCount(n) {
  const binaryString = n.toString(2);
  let count = 0;
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "1") {
      count++;
    }
  }
  return count;
}

const readBinaryWatch = function (turnedOn) {
  let resArr = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (bitCount(h) + bitCount(m) == turnedOn) {
        resArr.push(`${h}:${m > 9 ? m : `0${m}`}`);
      }
    }
  }
  return(resArr);
};

const result = readBinaryWatch(1); // result will be 2
