let str = 'The Flintstones Rock';

function repeatAndIndent(str) {
  for (let ctr = 0; ctr < 11; ctr++) {
    console.log(str.padStart(str.length + ctr));
  }
}

repeatAndIndent(str);