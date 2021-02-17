/* eslint-disable max-lines-per-function */
function stringToInteger(str) {
  let chars = str.split('');
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
  let number = 0;
  arrOfNums.forEach(num => {
    number = (10 * number) + num;
  });
  return number;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

function hexadecimalToInteger(hex) {
  let arr = hex.split('');
  let hexVal = 0;
  let hexIndex = arr.length - 1;
  arr.forEach(val => {
    if (Number.isInteger(Number(val))) {
      hexVal += Number(val) * (16 ** hexIndex);
      hexIndex--;
    } else {
      switch (val.toLowerCase()) {
        case 'a':
          hexVal += 10 * (16 ** hexIndex);
          hexIndex--;
          break;
        case 'b':
          hexVal += 11 * (16 ** hexIndex);
          hexIndex--;
          break;
        case 'c':
          hexVal += 12 * (16 ** hexIndex);
          hexIndex--;
          break;
        case 'd':
          hexVal += 13 * (16 ** hexIndex);
          hexIndex--;
          break;
        case 'e':
          hexVal += 14 * (16 ** hexIndex);
          hexIndex--;
          break;
        case 'f':
          hexVal += 15 * (16 ** hexIndex);
          hexIndex--;
          break;
      }
    }
  });
  return hexVal;
}

console.log(hexadecimalToInteger('4D9f') === 19871);