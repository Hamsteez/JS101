function multiply(numbers, multiplier) {
  let counter = 0;

  while (counter < numbers.length) {
    numbers[counter] *= multiplier;
    counter += 1;
  }
  console.log(numbers);
  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]