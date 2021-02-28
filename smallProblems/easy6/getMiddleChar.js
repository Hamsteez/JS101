function centerOf(str) {
  let length = str.length;
  let char = '';
  if (length % 2 === 0) {
    char = str[(length / 2) - 1] + str[(length / 2)];
  } else {
    char = str[(Math.round(length / 2)) - 1];
  }
  console.log(char);
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"