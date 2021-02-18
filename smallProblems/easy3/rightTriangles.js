function triangle(num) {
  let spaceCounter = num - 1;
  let starCounter = 1;
  for (let counter = 0; counter < num; counter++) {
    console.log(`${' '.repeat(spaceCounter)}${'*'.repeat(starCounter)}`);
    spaceCounter--;
    starCounter++;
  }
}

triangle(5);
triangle(9);