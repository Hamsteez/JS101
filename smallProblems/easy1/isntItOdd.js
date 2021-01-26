/*

given an input integer, determine whether the inputs absolute value is odd.
if it is, return true, else false.
if input is 0, return false
input is valid int.


input: integer, can be even/odd/zero
output: true/false

examples:
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

data struc/algorithm

take the input number and find its absolute value
determine whether the absolute value is odd or even

absolute value:
first determine if negative or positive
if pos -- return same number
if neg -- convert num to string
          take string from after first index pos
          store back as num
          return num

odd or even: 
if num % 2 is 0 then return true
*/

function isOdd(num) {
  let absNum = absValue(num);
  if (absNum % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function absValue(num) {
  if (num / 0 === Infinity) {
    return num;
  } else {
    return negNumConverter(num);
  }
}

function negNumConverter(num) {
  let str = num.toString();
  let strPos = str.slice(1);
  let pos = Number(strPos);
  return pos;
}

//answer -hahahhahahahaha smh
/*
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

*/

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true