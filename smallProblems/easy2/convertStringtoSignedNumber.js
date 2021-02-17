/* eslint-disable max-lines-per-function */
function stringToSignedInteger(str) {
  let chars = str.split('');
  let arrOfNums = [];
  if (chars[0] === '+' || chars[0] === '-') {
    arrOfNums = createArrOfNums(chars.slice(1));
  } else {
    arrOfNums = createArrOfNums(chars);
  }

  let number = 0;
  arrOfNums.forEach(num => {
    number = (10 * number) + num;
  });
  if (chars[0] === '-') {
    number = convertToNegative(number);
  }
  return number;
}

function createArrOfNums(chars) {
  let arrOfNums = chars.map(num => {
    switch (num) {
      case '0':
        return 0;
      case '1':
        return 1;
      case '2':
        return 2;
      case '3':
        return 3;
      case '4':
        return 4;
      case '5':
        return 5;
      case '6':
        return 6;
      case '7':
        return 7;
      case '8':
        return 8;
      case '9':
        return 9;
    }
  });
  return arrOfNums;
}

function convertToNegative(num) {
  num *= -1;
  return num;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true