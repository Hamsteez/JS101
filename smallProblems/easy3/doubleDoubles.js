function twice(num) {
  let stringNum = String(num);
  let evenness = stringNum.length % 2;
  if (evenness !== 0) {
    return num * 2;
  } else {
    let halfLength = stringNum.length / 2;
    let halfVal1 = stringNum.slice(0, halfLength);
    let halfVal2 = stringNum.slice(halfLength, stringNum);
    if (halfVal1 === halfVal2) {
      return num;
    } else {
      return num * 2;
    }
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676