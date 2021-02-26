const CONV_NUM = 60;
const OUT_OF_BOUNDS = 360;
// eslint-disable-next-line max-lines-per-function
function dms(num) {
  while (num < 0) {
    num = OUT_OF_BOUNDS + num;
  }
  while (num > 360) {
    num -= OUT_OF_BOUNDS;
  }
  let degrees = Math.floor(num);
  let minutesWithDecimal = (num - Math.floor(num)) * CONV_NUM;
  let minutes = Math.floor(minutesWithDecimal);
  let secondsWithDecimal = minutesWithDecimal -
    Math.floor(minutesWithDecimal);
  let seconds = Math.floor(secondsWithDecimal * 60);
  if (String(minutes).length === 1) {
    minutes = '0' + minutes;
  }
  if (String(seconds).length === 1) {
    seconds = '0' + seconds;
  }
  console.log(`${degrees}˚${minutes}'${seconds}"`);
}
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"
dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"