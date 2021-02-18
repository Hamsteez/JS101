function cleanUp(str) {
  let fixedStr = '';
  let lastChar;
  for (let counter = 0; counter < str.length; counter++) {
    if (str[counter].toUpperCase() !== str[counter].toLowerCase()) {
      fixedStr += str[counter];
      lastChar = str[counter];
    } else if (lastChar !== ' ') {
      fixedStr += ' ';
      lastChar = ' ';
    }
  }
  console.log(fixedStr);
}
cleanUp("---what's my +*& line?");    // " what s my line "