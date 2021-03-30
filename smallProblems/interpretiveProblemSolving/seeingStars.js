/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/*
input is odd num, referred to as num.
output is a numXnum grid of an 8 point star. The middle line consists of only stars that are num long.
There are Math.floor(num/2) lines above and below the middle line that consists of all stars.
These lines consist of only 3 stars per line.
For these non mid lines, you have 4 spaceCounters: one before the first star, after first, after second and after third.
The second and third space counters start large and decrement to 0, whereas the first and last space counters start at 0 and
  increment to a large value.
The starting value of the second and third space counter (ie the first line) is (num - 3) / 2. So if num is 9, then space counter 2
  and space counter 3 will be equal to 3 and decrement each line till 0. Space counter 1 and 4 will start at 0 and increment each
  line till 3 in the case of num = 9.
Once the midline is reached, we repeat the process in reverse where space counters 1 and 4 start at 3 (in the case of num = 9) and
  space counters 2 and 3 start at 0, working their way down and up, respectively.
*/

function star(num) {
  let numOfLines = Math.floor(num / 2);
  let lineCounter = 1;
  let spaceCounter1 = 0;
  let spaceCounter2 = (num - 3) / 2;
  let spaceCounter3 = (num - 3) / 2;
  let spaceCounter4 = 0;
  let str = '';
  let iteration = 1;

  while (lineCounter <= ((numOfLines * 2) + 1)) {
    if (lineCounter !== numOfLines + 1) {
      str += ' '.repeat(spaceCounter1);
      str += '*';
      str += ' '.repeat(spaceCounter2);
      str += '*';
      str += ' '.repeat(spaceCounter3);
      str += '*';
      str += ' '.repeat(spaceCounter4);
      if (lineCounter !== ((numOfLines * 2) + 1)) {
        str += '\n';
      }
      if (iteration === 1) {
        spaceCounter1++;
        spaceCounter2--;
        spaceCounter3--;
        spaceCounter4++;
      } else {
        spaceCounter1--;
        spaceCounter2++;
        spaceCounter3++;
        spaceCounter4--;
      }
    } else {
      str += '*'.repeat(num);
      str += '\n';
      spaceCounter1--;
      spaceCounter2++;
      spaceCounter3++;
      spaceCounter4--;
      iteration = 2;
    }
    lineCounter++;
  }
  console.log(str);
  return str;
}

star(15);

// str += '*'.repeat(num);
// spaceCounter1--;
// spaceCounter2++;
// spaceCounter3++;
// spaceCounter4--;
// lineCounter = 1;

// while (lineCounter <= numOfLines) {
//   str += '\n';
//   str += ' '.repeat(spaceCounter1);
//   str += '*';
//   str += ' '.repeat(spaceCounter2);
//   str += '*';
//   str += ' '.repeat(spaceCounter3);
//   str += '*';
//   str += ' '.repeat(spaceCounter4);
//   spaceCounter1--;
//   spaceCounter2++;
//   spaceCounter3++;
//   spaceCounter4--;
//   lineCounter++;
// }