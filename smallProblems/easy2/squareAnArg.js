function square(a) {
  return multiply(a, a);
}
function multiply(a, b) {
  return a * b;
}
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true