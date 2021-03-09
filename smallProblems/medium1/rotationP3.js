function rotateRightmostDigits(num, count) {
  let arr = String(num).split('');
  let poppedNum = arr.splice(arr.length - count, 1);
  arr.push(poppedNum);
  return Number(arr.join(''));
}

function maxRotation(num) {
  let counter = String(num).length;
  while (counter > 1) {
    num = rotateRightmostDigits(num, counter);
    counter--;
  }
  console.log(num);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845