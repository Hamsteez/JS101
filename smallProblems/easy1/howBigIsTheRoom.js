/*
given length and width of a room in meters, find the area in square meters and sqaure feet.
Note: 1 square meter == 10.7639 square feet
dont need to validate input, assume it is an int
use readlineSync to get user prompt.

Example:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

input: num (length in m), another num (width in m)
output: num (area of room in square m), another num (area of room in square ft)

rules:
  Explict req: num in meters, will be an int input, 
  Note: 1 square meter == 10.7639 square feet
  Implicit req: prompts given., answer set to 2 decimal places.
*/

let readlineSync = require("readline-sync");

console.log('Would you like the area in meters or feet?');
let metersOrFeet = readlineSync.prompt().toLowerCase();
while (metersOrFeet !== 'meters' && metersOrFeet !== 'feet') {
  console.log('Please enter `meters` or `feet`:');
  metersOrFeet = readlineSync.prompt().toLowerCase();
}

console.log('Enter the length of the room in meters:');
let length = Number(readlineSync.prompt());

console.log('Enter the width of the room in meters:');
let width = Number(readlineSync.prompt());

function roomArea(length, width) {
  let area = length * width;
  return area;
}

function areaMToFt(areaInMeters) {
  const SQ_M_TO_SQ_FT = 10.76359; //1 square meter == 10.7639 square feet
  let areaInFeet = areaInMeters * SQ_M_TO_SQ_FT;
  return areaInFeet;
}

let areaSqM = roomArea(length, width);
let areaSqFt = areaMToFt(areaSqM);

if (metersOrFeet === 'meters') {
  console.log(`The area of the room is ${areaSqM.toFixed(2)} square meters (${areaSqFt.toFixed(2)} square feet).`);
} else {
  console.log(`The area of the room is ${areaSqFt.toFixed(2)} square feet (${areaSqM.toFixed(2)} square meters).`);
}

