
function fibonacci(nVal) {
  if (nVal <= 2) {
    return 1;
  }
  return fibonacci(nVal - 1) + fibonacci(nVal - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

// function factorial(nVal) {
//   if (nVal === 1) {
//     return 1;
//   }
//   return nVal * factorial(nVal - 1);
// }

// console.log(factorial(10));