const RAND_VALS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function UUID() {
  let eight1 = valStore('e');
  let four1 = valStore('f');
  let twelve1 = valStore('t');
  let uuid = `${eight1}-${four1}-${four1}-${four1}-${twelve1}`;
  return uuid;
}

function randNum() {
  return Math.floor(10 * Math.random());
}

function valStore(val) {
  let looper = 0;
  let value = '';
  if (val[0] === 'e') {
    while (looper < 8) {
      looper++;
      value += RAND_VALS[Math.floor(15 * Math.random())];
    }
  } else if (val[0] === 'f') {
    while (looper < 4) {
      looper++;
      value += RAND_VALS[Math.floor(15 * Math.random())];
    }
  } else {
    while (looper < 12) {
      looper++;
      value += RAND_VALS[Math.floor(15 * Math.random())];
    }
  } return value;
}

console.log(UUID());