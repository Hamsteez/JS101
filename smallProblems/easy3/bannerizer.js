function logInBox(str, maxLength) {
  if (str.length > maxLength) {
    let length = maxLength;
    str = str.slice(0, maxLength - 2);
    console.log(`+${'-'.repeat(length)}+`);
    console.log(`|${' '.repeat(length)}|`);
    console.log(`|${' ' + str + ' '}|`);
    console.log(`|${' '.repeat(length)}|`);
    console.log(`+${'-'.repeat(length)}+`);
  } else {
    let length = str.length + 2;
    console.log(`+${'-'.repeat(length)}+`);
    console.log(`|${' '.repeat(length)}|`);
    console.log(`|${' ' + str + ' '}|`);
    console.log(`|${' '.repeat(length)}|`);
    console.log(`+${'-'.repeat(length)}+`);
  }
}
logInBox('To boldly go where no one has gone before.', 35);
logInBox('');