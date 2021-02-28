function negative(num) {
  console.log((num / 0 === Infinity) ? -num : num);
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0