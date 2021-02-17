function xor(input1, input2) {
  return ((input1 && !input2) || (!input1 && input2));
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);