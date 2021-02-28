// eslint-disable-next-line max-lines-per-function
function isBalanced(str) {
  let arrOfWords = str.split('');
  let arrOfParens = [];
  let arrOfSqrBrack = [];
  let arrOfCrlyBrack = [];
  let arrOfSnglQuot = [];
  let arrOfDblQuot = [];
  arrOfWords.forEach(char => {
    if (char === '(' || char === ')') {
      arrOfParens.push(char);
    } else if (char === '[' || char === ']') {
      arrOfSqrBrack.push(char);
    } else if (char === '{' || char === '}') {
      arrOfCrlyBrack.push(char);
    } else if (char === "'") {
      arrOfSnglQuot.push(char);
    } else if (char === '"') {
      arrOfDblQuot.push(char);
    }
  });
  if (arrOfParens[0] === ')' || arrOfParens[arrOfParens.length - 1] === '(') {
    return false;
  } else if (arrOfCrlyBrack[0] === '}' || arrOfCrlyBrack[arrOfCrlyBrack.length - 1] === '{') {
    return false;
  } else if (arrOfSqrBrack[0] === ']' || arrOfSqrBrack[arrOfSqrBrack.length - 1] === '[') {
    return false;
  } else {
    let openCounter = 0;
    let closedCounter = 0;
    let ParenBracks = arrOfParens.concat(arrOfSqrBrack,
      arrOfCrlyBrack);
    ParenBracks.forEach(char => {
      if (char === '(' || char === '[' || char === '{') {
        openCounter++;
      } else {
        closedCounter++;
      }
    });
    let singleYes = arrOfSnglQuot.length % 2;
    let doubleYes = arrOfDblQuot.length % 2;
    return openCounter === closedCounter && singleYes === 0 && doubleYes === 0;
  }
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

console.log(isBalanced(`"()()({[][''"''][]"}{}")`) === true);