function featured(insertedNum) {
  if (insertedNum > 9876543200) {
    console.log('There is no possible number that fulfills those requirements.');
  } else {
    let sevenMult = 0;
    while (sevenMult <= insertedNum ||
          Number.isInteger(sevenMult / 2) || !occurOnce(sevenMult)) {
      sevenMult += 7;
    }
    console.log(sevenMult);
  }
}

function occurOnce(sevenMult) {
  let arr = String(sevenMult).split('');
  arr.sort((a, b) => a - b);
  let returnVal = true;
  arr.forEach((num, idx) => {
    if (arr[idx - 1] === num || arr[idx + 1] === num) {
      returnVal = false;
    }
  });
  return returnVal;
}


featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."