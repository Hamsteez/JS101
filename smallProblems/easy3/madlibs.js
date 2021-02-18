let readline = require("readline-sync");

let noun = readline.question(`Enter a noun: `);
let verb = readline.question(`Enter a verb: `);
let adjective = readline.question(`Enter a adjective: `);
let adverb = readline.question(`Enter a adverb: `);

console.log(`${noun} jumped off the moon and landed very ${adverb}.`);
console.log(`${noun} also likes to ${verb} while looking down at a ${adjective} patch of grass.`);
