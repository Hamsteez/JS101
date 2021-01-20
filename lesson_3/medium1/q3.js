function factors(number) {
  let divisor = number;
  let factors = [];

  if (number === 0) {
    console.log('You entered 0');
  } else if ((number / 0)  === -Infinity) {
    console.log('You entered a negative number');
  } else {
    while (divisor !== 0) {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;
    }
    console.log(factors);
  }
  return factors;
}

factors(18);
factors(0);
factors(-18);