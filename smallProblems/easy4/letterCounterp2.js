function stringOfLettersOnly(str) {
  let finalObj = {};
  if (str.length > 0) {
    let arrOfStr = str.split(' ');
    arrOfStr.forEach(word => {
      let length = getOnlyLetters(word).length;
      if (finalObj[length]) {
        finalObj[length] += 1;
      } else {
        finalObj[length] = 1;
      }
    });
  }
  console.log(finalObj);
}

function getOnlyLetters(word) {
  let letters = word.toLowerCase().split('');
  let arrWord = [];
  letters.forEach(char => {
    if (char >= 'a' && char <= 'z') {
      arrWord.push(char);
    }
  });
  return arrWord.join('');
}

stringOfLettersOnly('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
stringOfLettersOnly('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
stringOfLettersOnly("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
stringOfLettersOnly('');