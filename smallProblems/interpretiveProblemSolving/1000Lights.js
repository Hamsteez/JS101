/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/*
given a number of total switches.
output an array of numbers/switches that are 'turned on'
on each round, the increment of going thru the switches is increased by 1.
ie: first round: every switch is flipped
    second round: every other switch (increment of 2s, switches 2,4,6,8... are flipped)
    third round: every 2 switches (increment of 3s, switches 3,6,9... are flipped)
use number of total switches, now referred to as count, and create an object with every number from 1 to count as keys.
Then create the values for every key set to off, now referred to as false.
Now create a value called iterator which will be what the function uses to go thru each increment.
ie: if iterator is 3, then the function will know to go and flip every 3 switches.
Use while loop to check whether iterator <= count.
inside loop we use a for loop to loop thru the obj going incrementing at iterator value.
ie: if iterator is at 3, the loop will start at zero as usual and go until it reaches the length of the obj, but it is going at an
  increment of 3 instead of your typical count of 1.
At each increment you access the obj at that increment and set the value to opposite of what the current value is.
This can be done as such: obj[iterator] = !obj[iterator]. This basically means for example, if the iterator was at 6, and
  currently obj[6] = true, then obj[6] = !true which makes obj[6] = false.
Once while loop is exited we create another for loop and loop thru the obj pushing every key that has a value of true.
Remember that swicthes start from a number of 1, however an obj starts from a number of 0.
*/

function lightsOn(count) {
  let obj = {};
  let counter = 1;
  while (counter <= count) {
    obj[counter] = false;
    counter++;
  }
  let iterator = 1;
  while (iterator <= count) {
    for (let miniCntr = iterator; miniCntr <= count; miniCntr += iterator) {
      obj[miniCntr] = !obj[miniCntr];
    }
    iterator++;
  }
  let onArr = [];
  for (const property in obj) {
    if (obj[property] === true) {
      onArr.push(Number(property));
    }
  }
  console.log(onArr);
}

lightsOn(5);        // [1, 4]
lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]