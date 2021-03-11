let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function fridayThe13ths(year) {
  let counter = 0;
  months.forEach(month => {
    let thirteenth = new Date(`${month} 13, ${year}`);
    let dayNum = thirteenth.getDay();
    if (dayNum === 5) counter++;
  });
  console.log(counter);
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2