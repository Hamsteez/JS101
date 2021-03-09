/* eslint-disable max-len */
const WORD_NUM = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9};

function wordToDigit(str) {
  let newArr = [];
  str.split(' ').forEach(word => {
    let newWord = word.toLowerCase().split('').filter(char => char >= 'a' && char <= 'z').join('');
    if (Object.keys(WORD_NUM).includes(newWord) && !(word[word.length - 1] >= 'a' && word[word.length - 1] <= 'z')) {
      newArr.push(WORD_NUM[newWord] + word[word.length - 1]);
    } else if (Object.keys(WORD_NUM).includes(newWord)) {
      newArr.push(WORD_NUM[newWord]);
    } else {
      newArr.push(word);
    }
  });
  console.log(newArr.join(' '));
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
wordToDigit('The weight is done.');      // "The w8 is d1."