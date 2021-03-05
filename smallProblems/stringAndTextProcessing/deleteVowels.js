const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function removeVowels(arr) {
  let x = arr.map(str => {
    let smallArr = str.split('');
    return smallArr.filter(char => {
      return (!VOWELS.includes(char.toLowerCase()));
    }).join('');
  });
  console.log(x);
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]