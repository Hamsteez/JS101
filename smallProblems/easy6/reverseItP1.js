function reverseSentence(str) {
  let arr = str.split(' ').reverse().join(' ');
  console.log(arr);
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"