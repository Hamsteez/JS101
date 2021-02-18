function stringy(num) {
  let counter = 1;
  let str = '';
  while (num) {
    if (counter % 2 === 1) {
      str += '1';
      num--;
      counter++;
    } else {
      str += '0';
      num--;
      counter++;
    }
  }
  console.log(str);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"