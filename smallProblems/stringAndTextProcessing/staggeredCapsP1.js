function staggeredCase(str) {
  let counter = 0;
  let sol = str.split('').map(char => {
    if (counter % 2 === 0) {
      counter++;
      return char.toUpperCase();
    } else {
      counter++;
      return char.toLowerCase();
    }
  }).join('');
  console.log(sol);
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"