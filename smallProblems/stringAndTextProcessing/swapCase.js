function swapCase(str) {
  let arr = str.split('').map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }).join('');
  console.log(arr);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"