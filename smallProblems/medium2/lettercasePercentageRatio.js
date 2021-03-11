// eslint-disable-next-line max-lines-per-function
function letterPercentages(str) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };
  let arr = str.split('');
  arr.forEach(char => {
    if (char >= 'a' && char <= 'z') {
      obj.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  });

  obj.lowercase = ((obj.lowercase / arr.length) * 100).toFixed(2);
  obj.uppercase = ((obj.uppercase / arr.length) * 100).toFixed(2);
  obj.neither = ((obj.neither / arr.length) * 100).toFixed(2);

  console.log(obj);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }