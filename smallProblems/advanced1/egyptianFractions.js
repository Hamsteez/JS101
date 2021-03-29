/* eslint-disable max-len */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/*
rational # -integer divided by int
unit fraction - 1 divided by positive int
egyptian fraction -sum of a series of distint unit fractions, no 2 are the same, basically, the denomitors all defer

let arr = []
let den = 1
let sum = 1/den
if (sum === fraction)
  arr.push(den)
  return arr
while (sum < fraction)
  den++
  sum += 1 / den
  if (sum > fraction)
    sum -= 1 / den

if (sum === 1)
  sum = 0
  while (sum > fraction)
    den--
    sum += 1 / den
    if (sum < fraction)
      sum -= 1 / den

*/

let Fraction = require('fraction.js');
//{ s: 1, n: 1, d: 1 }
//console.log(Fraction(1).div(98).mul(98));

// console.log(Fraction(137, 60));

function egyptian(val) {
  let solArr = [];
  let den = 1;
  let sum = 1 / den;
  solArr.push(den);

  if (1 === val.d && 1 === val.n) {
    return solArr;
  }

  while (sum < val) {
    den++;
    sum += 1 / den;
    if (sum > val) {
      sum -= 1 / den;
    } else {
      solArr.push(den);
    }
  }

  if (sum === 1) {
    solArr.pop();
    den = 1;
    sum = 0;
    while (sum < val) {
      den++;
      sum += 1 / den;
      if (sum > val) {
        console.log('no', sum, den);
        sum -= 1 / den;
        console.log(solArr);
      } else {
        solArr.push(den);
      }
    }
  }
  return solArr;
}

// function egyptian(targetValue) {
//   let denominators = [];
//   let unitDenominator = 1;
//   while (targetValue > 0) {
//     let unitFraction = new Fraction(1, unitDenominator);
//     if (unitFraction <= targetValue) {
//       targetValue = targetValue.sub(unitFraction);
//       denominators.push(unitDenominator);
//     }
//     unitDenominator += 1;
//   }
//   return denominators;
// }

function unegyptian(denominators) {
  // return denominators.reduce(
  //   (accum, num) => accum + new Fraction(1, num), new Fraction(0)
  // );
  let sum = new Fraction(0);
  denominators.forEach(den => {
    sum += new Fraction(1, den);
  });
  return sum;
}
// console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
// console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
// console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

// console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
// console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
// console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
// console.log((egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log((egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
// console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
// console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
// console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3