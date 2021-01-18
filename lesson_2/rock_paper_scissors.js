const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const SHORTHAND_CHOICES = ['r', 'p', 'sc', 'l', 'sp'];

function prompt(message) {
  console.log(`=> ${message}`);
}


function displayWinner(choice, computerChoice) {
  let myChoice = SHORTHAND_CHOICES.indexOf(choice);
  let compChoice = SHORTHAND_CHOICES.indexOf(computerChoice);
  prompt(`You chose ${VALID_CHOICES[myChoice]}, computer chose ${VALID_CHOICES[compChoice]}`);

  if (youWin(choice, computerChoice)) {
    prompt('You won that round');
    scoreKeeper('human');
  } else if (youLose(choice, computerChoice)) {
    prompt('Computer won that round');
    scoreKeeper('bot');
  } else {
    prompt("That round was a tie! Score is unchanged.");
  }
}

let matchOngoing = true;
let humanScore = 0;
let botScore = 0;

function scoreKeeper(roundWinner) {
  if (roundWinner === 'human') {
    humanScore++;
  } else {
    botScore++;
  }

  if (humanScore === 5) {
    prompt(`You win best of 5: Your score ${humanScore}, Computer score: ${botScore}`);
    matchOngoing = false;
    humanScore = 0;
    botScore = 0;
  } else if (botScore === 5) {
    prompt(`You lose best of 5: Your score ${humanScore}, Computer score: ${botScore}`);
    matchOngoing = false;
    humanScore = 0;
    botScore = 0;
  } else {
    prompt(`You got this! The current score is: you: ${humanScore} computer: ${botScore}`);
  }

}


function youWin(choice, computerChoice) {
  return (choice === 'sc' && computerChoice === 'p') ||
      (choice === 'p' && computerChoice === 'r') ||
      (choice === 'r' && computerChoice === 'l') ||
      (choice === 'l' && computerChoice === 'sp') ||
      (choice === 'sp' && computerChoice === 'sc') ||
      (choice === 'sc' && computerChoice === 'l') ||
      (choice === 'l' && computerChoice === 'p') ||
      (choice === 'p' && computerChoice === 'sp') ||
      (choice === 'sp' && computerChoice === 'r') ||
      (choice === 'r' && computerChoice === 'sc');
}


function youLose(choice, computerChoice) {
  return (computerChoice === 'sc' && choice === 'p') ||
      (computerChoice === 'p' && choice === 'r') ||
      (computerChoice === 'r' && choice === 'l') ||
      (computerChoice === 'l' && choice === 'sp') ||
      (computerChoice === 'sp' && choice === 'sc') ||
      (computerChoice === 'sc' && choice === 'l') ||
      (computerChoice === 'l' && choice === 'p') ||
      (computerChoice === 'p' && choice === 'sp') ||
      (computerChoice === 'sp' && choice === 'r') ||
      (computerChoice === 'r' && choice === 'sc');
}


while (true) {
  while (matchOngoing) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}; key: r p sc sp l`);
    let choice = readline.question();

    while (!SHORTHAND_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = SHORTHAND_CHOICES[randomIndex];

    displayWinner(choice, computerChoice);
  }
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}