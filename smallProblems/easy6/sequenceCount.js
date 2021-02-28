function sequence(count, multiplier) {
  let sol = [];
  for (let counter = 0; counter < count; counter++) {
    if (sol.length === 0) {
      sol.push(multiplier);
    } else {
      sol.push(sol[sol.length - 1] + multiplier);
    }
  }
  console.log(sol);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []