function neutralize(sentence) {
  let words = sentence.split(" ");

  for (let counter = 0; counter < words.length; counter++) {
    if (isNegative(words[counter])) {
      const index = words.indexOf(words[counter]);
      words.splice(index, 1);
      counter--;
    }
  }

  return words.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.