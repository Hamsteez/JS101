/* eslint-disable max-len */
/*
1. if num = 0 ... 00:00
2. num > 0, < 1440 ... Math.floor(num / 60) // This gives me the int value of the num. i.e: 200 / 60 = 3.3333... flooring it gives
                                            me 3. I then add the hours part `00`:00 by 3. Then I take the decimal part and subtract
                                            it by 3, giving me .3333....
                                            Then I take that value and multiply it by 60. In this case giving me 20. Then I add
                                            add that to the minutes: 00:`00`.
3. num > 1440 ... keep subtracting num by 1440 using a while loop until num < 1440, then repeat process 2
4. num < 0, > -1440 ... Take the num, absVal it. Then take absVal of num, take that num, /60 then take int part and subtract it by
                        23. That is your hours. Then take decimal part and multiply by 60 and subtract that number by 60. That is
                        your minutes part.
5. num < -1440 ... absVal it then do while loop until its less than 1440. Then repeat process 4.
*/

const HOUR_CONV = 60;
const MIN_CONV = 60;
const NEGATIVE_HOURS_CONV = 23;
const NEGATIVE_MIN_CONV = 60;
const MIN_PER_DAY = 60 * 24;
const NEG_DAY_CONV = 6;
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function timeOfDay(num) {
  let sol = '';
  if (num >= 0 && num < 1441) {
    sol = posLessThan(num);
  } else if (num > MIN_PER_DAY) {
    sol = posMoreThan(num);
  } else if (num < 0 && num > -1441) {
    sol = negLessThan(num);
  } else if (num < -MIN_PER_DAY) {
    sol = negMoreThan(num);
  }
  sol = zeroPad(sol);
  return sol;
}

function zeroPad(sol) {
  let bigArr = sol.split(' ');
  let arr = bigArr[1].split(':');
  let hours = arr[0];
  let min = arr[1];
  if (hours.length === 1) {
    arr[0] = '0' + arr[0];
  }
  if (min.length === 1) {
    arr[1] = '0' + arr[1];
  }
  return (bigArr[0] + ' ' + arr[0] + ':' + arr[1]);
}

function posLessThan(num, dayCounter = 0) {
  let sol  = '';
  let numDiv = num / HOUR_CONV;
  let hours = Math.floor(numDiv);
  let min = Math.round((numDiv % 1) * MIN_CONV);
  sol = DAYS[dayCounter] + ' ' + hours + ':' + min;
  return sol;
}

function posMoreThan(num) {
  let dayCounter = 0;
  while (num > MIN_PER_DAY) {
    num -= MIN_PER_DAY;
    dayCounter++;
  }
  return posLessThan(num, dayCounter);
}

function negLessThan(num, dayCounter = 6) {
  let sol = '';
  let posNum = Math.abs(num);
  let numDiv = posNum / HOUR_CONV;
  let hours = NEGATIVE_HOURS_CONV - Math.floor(numDiv);
  let min = NEGATIVE_MIN_CONV - Math.round((numDiv % 1) * MIN_CONV);
  sol = DAYS[dayCounter] + ' ' + hours + ':' + min;
  return sol;
}

function negMoreThan(num) {
  let dayCounter = 0;
  while (num < -MIN_PER_DAY) {
    num += MIN_PER_DAY;
    dayCounter++;
  }
  dayCounter = NEG_DAY_CONV - dayCounter;
  return negLessThan(num, dayCounter);
}

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));