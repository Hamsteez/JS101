let readlineSync = require("readline-sync");

console.log('What is the bill amount?');
let billAmt = Number(readlineSync.prompt());

console.log('What is the tip percentage?');
let tipPrct = Number(readlineSync.prompt());

function tipAmt(bill, tipPrct) {
  let tip = bill * (tipPrct / 100);
  return tip;
}

function totBill(bill, tip) {
  let totBill = bill + tip;
  return totBill;
}

let tip = tipAmt(billAmt, tipPrct);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${totBill(billAmt, tip).toFixed(2)}`);