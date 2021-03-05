function staggeredCase(str, nonAlph = false) {
  if (nonAlph) {
    console.log(staggeredCaseAll(str));
    return staggeredCaseAll(str);
  } else {
    console.log(staggeredCaseAlph(str));
    return staggeredCaseAlph(str);
  }
}

function staggeredCaseAlph(str) {
  let counter = 0;
  let sol = str.split('').map(char => {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      if (counter % 2 === 0) {
        counter++;
        return char.toUpperCase();
      } else {
        counter++;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
  return sol;
}

function staggeredCaseAll(str) {
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
  return sol;
}

console.log(staggeredCase("I Love Launch School!", false) === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS", true) === "AlL CaPs");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);