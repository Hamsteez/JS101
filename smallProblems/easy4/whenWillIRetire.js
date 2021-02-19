let readline = require("readline-sync");
let age = readline.question(`What is your age? `);
let retireAge = readline.question(`At what age would you like to retire? `);
let yearsLeft = retireAge - age;
let currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsLeft}.`);
console.log(`You only have ${yearsLeft} years of work to go!`);