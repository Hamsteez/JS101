/* eslint-disable max-lines-per-function */
function integerToString(num) {
  let arrOfString = [];
  let updatedNum = num;
  if (num === 0) {
    arrOfString = convertToString(num, arrOfString);
  } else {
    while (Math.floor(updatedNum) !== 0) {
      updatedNum /= 10;
      let decimalPortion = (updatedNum % 1).toFixed(1) * 10;
      arrOfString = convertToString(decimalPortion, arrOfString);
      updatedNum = Math.floor(updatedNum);
    }
  }
  arrOfString = arrOfString.join('');
  console.log(arrOfString);
  return arrOfString;
}

function convertToString(num, arrOfString) {
  switch (num) {
    case 0:
      arrOfString.splice(0, 0, '0');
      break;
    case 1:
      arrOfString.splice(0, 0, '1');
      break;
    case 2:
      arrOfString.splice(0, 0, '2');
      break;
    case 3:
      arrOfString.splice(0, 0, '3');
      break;
    case 4:
      arrOfString.splice(0, 0, '4');
      break;
    case 5:
      arrOfString.splice(0, 0, '5');
      break;
    case 6:
      arrOfString.splice(0, 0, '6');
      break;
    case 7:
      arrOfString.splice(0, 0, '7');
      break;
    case 8:
      arrOfString.splice(0, 0, '8');
      break;
    case 9:
      arrOfString.splice(0, 0, '9');
      break;
  }
  return arrOfString;
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"
console.log(integerToString(4321) === '4321');