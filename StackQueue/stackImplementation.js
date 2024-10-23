const isValid = function (s) {
  let stackArr = [];
  if (s.length % 2 !== 0) return false;
  let parObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i of s) {
    console.log(i);
    if (Object.keys(parObj).indexOf(i) > -1) {
      stackArr.unshift(i);
    } else if (Object.values(parObj).indexOf(i) > -1) {
      let top = stackArr.shift();
      if (parObj[top] !== i || !top) {
        return false;
      }
    }
  }
  if (stackArr.length == 0) return true;
  return false;
};

let c1 = isValid("()");
console.log(c1);
