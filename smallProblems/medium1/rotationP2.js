function rotateRightmostDigits(num, count) {
  let arr = String(num).split('');
  let poppedNum = arr.splice(arr.length - count, 1);
  arr.push(poppedNum);
  console.log(Number(arr.join('')));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917