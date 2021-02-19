let readline = require("readline-sync");

let arrOfNums = [];

arrOfNums.push(Number(readline.question(`Enter the first number: `)));
arrOfNums.push(Number(readline.question(`Enter the second number: `)));
arrOfNums.push(Number(readline.question(`Enter the third number: `)));
arrOfNums.push(Number(readline.question(`Enter the fourth number: `)));
arrOfNums.push(Number(readline.question(`Enter the fifth number: `)));
let numChecker = Number(readline.question(`Enter the last number: `));

function searching(arrOfNums, numChecker) {
  if (arrOfNums.includes(numChecker)) {
    console.log(`The number ${numChecker} appears in ${arrOfNums.join()}.`);
  } else {
    console.log(`The number ${numChecker} does not appear in ${arrOfNums.join()}.`);

  }
}
searching(arrOfNums, numChecker);

function isIncluded(arr, val) {
  return arr.some(num => {
    return num === val;
  });

}

console.log(isIncluded(arrOfNums, 6));