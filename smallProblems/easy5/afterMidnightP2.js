const MIN_MULTIPLIER = 60;
const MIN_PER_DAY = 1440;

function afterMidnight(str) {
  let arr = str.split(':');
  let totMin = Number(arr[0] * MIN_MULTIPLIER) + Number(arr[1]);
  if (totMin === MIN_PER_DAY) totMin = 0;
  return totMin;
}

function beforeMidnight(str) {
  let arr = str.split(':');
  let totMin = Number(arr[0] * MIN_MULTIPLIER) - Number(arr[1]);
  if (totMin === MIN_PER_DAY) totMin = 0;
  return totMin;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);