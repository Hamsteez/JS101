let readlineSync = require("readline-sync");

console.log(`Please enter an integer greater than 0:`);
let integer = Number(readlineSync.prompt());

while (integer <= 0 || ((integer % 1) !== 0)) {
  console.log(`Please enter an integer greater than 0:`);
  integer = Number(readlineSync.prompt());
}

console.log(`Enter "s" to compute the sum, or "p" to compute the product:`);
let computation = readlineSync.prompt();

while (computation !== 's' && computation !== 'p') {
  console.log(`Enter "s" to compute the sum, or "p" to compute the product:`);
  computation = readlineSync.prompt();
}

function sum(num) {
  let tot = 0;
  for (let counter = num; counter > 0; counter -= 1) {
    if (counter === num) {
      tot = counter + (counter - 1);
    } else {
      tot += (counter - 1);
    }
  }
  return tot;
}

function product(num) {
  let tot = 0;
  for (let counter = num; counter > 0; counter -= 1) {
    if (counter === num) {
      tot = counter * (counter - 1);
    } else if (counter !== 1) {
      tot *= (counter - 1);
    }
  }
  return tot;
}

if (computation === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${sum(integer)}.`)
} else if (computation === 'p') {
  console.log(`The product of the integers between 1 and ${integer} is ${product(integer)}.`)
}