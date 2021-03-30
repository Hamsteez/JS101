/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/*
given an odd integer
need to output a diamond with that odd integer being the center of the diamond
each line of the diamond is an odd amount of stars
ie: input is 3:
 *
***
 *
need to start by printing 1 star then keep printing an odd number of stars on each line, 1 3 5 7 etc. until the stars equal
the input int, which we'll call inpNum.
create a for loop that prints out stars based on the current number youre on, call the number starCount. starCount will always
be odd. in each iteration, you check whether the starCount = inpNum. Once it does then you exit the current loop. Now we are left
with the top half of the diamond.
Now we need to go into another loop and repeat the same process but in reverse, starting with the odd number that is one below
starCount.
ie: if we are given 5 as inpNum then right now we have:
  *
 ***
*****
The next odd number is inpNum - 2, so we start from 3 and work our way down to 1 star.
The next issue is keeping track of spaces in front of stars. We know that the first line will have an x amount of spaces and from
there the spaces will go down by one each line until it reaches inpNum, then it starts to increase until it reaches that x value
again.
The way the value x is determined is by taking inpNum and dividing it by 2 and taking using Math.floor on that value to get the
integer part of the value.
Now that we have the max number of spaces we have another for loop within the larger for loop to print the stars and first add the
number of spaces required and then add the number of stars.
Also an edge case is when the inpNum = 1. In that case, forget the other process and just print 1 *.
*/

function diamond(inpNum) {
  let stringSol = '';
  if (inpNum === 1) {
    stringSol = '*';
    console.log(stringSol);
    return stringSol;
  }

  let starCounter = 3;
  let spaceCounter = Math.floor(inpNum / 2);

  stringSol += ' '.repeat(spaceCounter);
  stringSol += '*\n';
  spaceCounter--;
  while (starCounter <= inpNum) {
    stringSol += ' '.repeat(spaceCounter);
    stringSol += '*';
    stringSol += ' '.repeat(starCounter - 2);
    stringSol += '*';
    stringSol += '\n';
    starCounter += 2;
    spaceCounter--;
  }
  starCounter = inpNum - 2;
  spaceCounter = 1;

  while (starCounter > 0) {
    stringSol += ' '.repeat(spaceCounter);
    stringSol += '*';
    if (starCounter === 1) {
      break;
    }
    stringSol += ' '.repeat(starCounter - 2);
    stringSol += '*';
    if (starCounter !== 1) {
      stringSol += '\n';
    }
    starCounter -= 2;
    spaceCounter++;
  }

  console.log(stringSol);
  return stringSol;
}

diamond(1);
diamond(3);
diamond(27);