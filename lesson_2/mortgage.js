let uInput = require('readline-sync');

console.log('Welcome to the monthly mortgage payment calculator!');

function numTest(num) {
  return num.toString().trim() === '' ||
         num < 0   ||
         Number.isNaN(Number(num));
}

let keepGoing = true;

while (keepGoing) {
  let loanAmount = (uInput.question('What is the total loan amount (i.e 5000 is $5000)? -->'));
  while (numTest(loanAmount)) {
    console.log('Please enter an appropriate value -->');
    loanAmount = Number(uInput.question());
  }

  let apr = Number(uInput.question('What is the Annual Percentage Rate (i.e 5 is 5%)? -->'));
  while (numTest(apr)) {
    console.log('Please enter an appropriate value -->');
    apr = Number(uInput.question());
  }

  let loanDurYears = Number(uInput.question('What is total number of years the loan will be (i.e 5 is years) -->?'));
  while (numTest(loanDurYears)) {
    console.log('Please enter an appropriate value -->');
    loanDurYears = Number(uInput.question());
  }

  let loanDurMonths = Number(uInput.question('Any extra months in addition the the number of years? (i.e 5 is 5 months)? -->'));
  while (numTest(loanDurMonths)) {
    console.log('Please enter an appropriate value -->');
    loanDurMonths = Number(uInput.question());
  }

  let monthlyIntRate = (apr / 100) / 12;
  let totLoanMonths = (loanDurYears * 12) + loanDurMonths;

  let monthlyPayment = loanAmount *
    (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-totLoanMonths))));

  // eslint-disable-next-line max-len
  //console.log(loanAmount, apr, loanDurYears, loanDurMonths, monthlyIntRate, totLoanMonths);

  console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  let go = uInput.question('Would you like another calculation? (Enter yes/no) -->').toLowerCase();
  while (go !== 'yes' && go !== 'no') {
    go = uInput.question('Please enter yes/no) -->').toLowerCase();
  }

  if (go === 'no') {
    keepGoing = false;
    console.log('Have a good day!');
  }
}
