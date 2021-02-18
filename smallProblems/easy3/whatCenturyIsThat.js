/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
const WEIRD_NUMS = ['11', '12', '13'];
function century(num) {
  let century = [];
  if (num < 101) {
    century.push(1);
  } else {
    let numArr = String(num).split('');
    if (numArr[numArr.length - 1] === '0' && numArr[numArr.length - 2] === '0') {
      century.push(Number(numArr.splice(0, numArr.length - 2).join('')));
    } else {
      century.push(Number(numArr.splice(0, numArr.length - 2).join('')) + 1);
    }
  }
  let centuryStr = century.join();
  let last2Nums = centuryStr[centuryStr.length - 2] + centuryStr[centuryStr.length - 1];
  let finalNum = centuryStr[centuryStr.length - 1];

  if (WEIRD_NUMS.includes(last2Nums)) {
    centuryStr += 'th';
  } else {
    switch (finalNum) {
      case '1':
        centuryStr += 'st';
        break;
      case '2':
        centuryStr += 'nd';
        break;
      case '3':
        centuryStr += 'rd';
        break;
      default:
        centuryStr += 'th';
        break;
    }
  }

  console.log(centuryStr);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"