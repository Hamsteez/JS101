function asciiValue(str) {
  let val = 0;

  for (let counter = 0; counter < str.length; counter++) {
    val += str.charCodeAt(counter);
  }
  console.log(val);
  return val;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0