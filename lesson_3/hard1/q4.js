function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }
  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length === 4) {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

console.log(isDotSeparatedIpAddress('1.2.3.5'));
console.log(isDotSeparatedIpAddress('1111.1.1.1'));
console.log(isDotSeparatedIpAddress('1.abc.1.1'));
console.log(isDotSeparatedIpAddress('1.1.1.1.1'));