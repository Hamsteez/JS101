const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(str) {
  let arr = str.split('');
  let newArr = [];
  arr.forEach(char => {
    if (CONSONANTS.includes(char.toLowerCase())) {
      newArr.push(char);
      newArr.push(char);
    } else {
      newArr.push(char);
    }
  });
  console.log(newArr.join(''));
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""