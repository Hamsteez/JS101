let readline = require("readline-sync");

console.log(`What is your name?`);
let name = readline.question();
if (name[name.length - 1] === '!') {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name.slice(0, name.length)}.`);
}