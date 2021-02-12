/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
let readline = require("readline-sync");

function prompt(question) {
  console.log(`=> ${question}`);
}

const SUITS = [ 'H', 'D', 'C', 'S' ];
const VALUES = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
const VALUE_LETTERS = ['J', 'Q', 'K', 'A'];
const DECK = [];
const CONTINUE_VALUES = ['y', 'n', 'yes', 'no'];
const HIT_STAY_VALUES = ['h', 's', 'hit', 'stay'];
const GAME_OF_VALUE = 21;
const COMPUTER_CARD_BOUNDARY = GAME_OF_VALUE - 4;
const ACE_CALC_HELPER = GAME_OF_VALUE - 11;

function createDeck() {
  DECK.splice(0, DECK.length);
  for (let iSuits = 0; iSuits < SUITS.length; iSuits++) {
    for (let jValues = 0; jValues < VALUES.length; jValues++) {
      DECK.push([SUITS[iSuits],VALUES[jValues]]);
    }
  }
}

function calcAceValue(totalWithoutAces, arrOfAces) {
  let aceTotal = 0;
  let poppedArr = 0;
  if (totalWithoutAces <= ACE_CALC_HELPER) {
    aceTotal += 11;
    arrOfAces.pop();
    poppedArr++;
  }
  for (let acesLooper = 0; acesLooper < arrOfAces.length; acesLooper++) {
    aceTotal += 1;
  }
  if ((aceTotal + totalWithoutAces) > GAME_OF_VALUE) {
    aceTotal = 0;
    if (poppedArr !== 0) {
      arrOfAces.push('A');
    }
    for (let acesLooper = 0; acesLooper < arrOfAces.length; acesLooper++) {
      aceTotal += 1;
    }
  }
  return aceTotal;
}

function total(cardsDealt) {
  let totalWithoutAces = 0;
  let total = 0;
  let arrOfAces = [];
  let totArrOfValues = cardsDealt.map(card => card[1]);

  for (let vals = 0; vals < totArrOfValues.length; vals++) {
    if (totArrOfValues[vals] !== 'A') {
      if (!VALUE_LETTERS.includes(totArrOfValues[vals])) {
        totalWithoutAces += Number(totArrOfValues[vals]);
      } else {
        totalWithoutAces += 10;
      }
    } else {
      arrOfAces.push(totArrOfValues[vals]);
    }
  }
  if (arrOfAces.length === 0) {
    total = totalWithoutAces;
  } else {
    total += totalWithoutAces + calcAceValue(totalWithoutAces, arrOfAces);
  }
  return total;
}

function playerTurn(playerCards) {
  let dealerCards = giveSomeoneFirst2Cards();
  prompt(`This is the dealers hand:`);
  console.log(dealerCards[0]);
  while (true) {
    prompt(`Would you like to hit or stay?`);
    let answer = readline.question().toLowerCase();
    while (!HIT_STAY_VALUES.includes(answer)) {
      prompt(`Invalid response please enter hit or stay:`);
      answer = readline.question().toLowerCase();
    }

    if (answer === 's' || answer === 'stay' || busted(playerCards)) {
      break;
    } else {
      playerCards = dealAnotherCard(playerCards);
      displayDeck(playerCards);
      if (busted(playerCards)) {
        break;
      }
    }
  }
  if (busted(playerCards)) {
    prompt(`You busted!`);
    displayResults(dealerCards, playerCards, 'Dealer', 'Player');
    return 'Dealer';
  } else {
    prompt(`You chose to stay with a score of ${total(playerCards)}.`);
    let winner = dealerTurn(playerCards, dealerCards);
    return winner;
  }
}

function busted(someonesHand) { //someonesHand refers to either the Players hand(cards) or the Dealers hand(cards)
  return (total(someonesHand) > GAME_OF_VALUE);
}

function dealAnotherCard(someonesHand) {
  someonesHand.push(DECK[0]);
  DECK.shift();
  return someonesHand;
}

function dealerTurn(playerCards, dealerCards) {
  prompt(`Dealers turn!`);
  while (true) {
    if (total(dealerCards) > COMPUTER_CARD_BOUNDARY || busted(dealerCards)) {
      break;
    } else {
      prompt(`Dealer chose to hit!`);
      dealAnotherCard(dealerCards);
      prompt(`Dealers' cards are now:`);
      console.log(dealerCards);
    }
  }
  if (busted(dealerCards)) {
    prompt(`Dealer busted!`);
    displayResults(playerCards, dealerCards, 'Player', 'Dealer');
    return 'Player';
  } else {
    prompt(`Dealer chose to stay!`);
    let winner = findWinner(dealerCards, playerCards);
    return winner;
  }
}

function findWinner(dealerCards, playerCards) {
  let dealerTotal = total(dealerCards);
  let playerTotal = total(playerCards);
  if (dealerTotal > playerTotal) {
    prompt(`Dealer had a score closer to ${GAME_OF_VALUE}!`);
    displayResults(dealerCards, playerCards, 'Dealer', 'Player');
    return 'Dealer';
  } else if (playerTotal > dealerTotal) {
    prompt(`Player had a score closer to ${GAME_OF_VALUE}!`);
    displayResults(playerCards, dealerCards, 'Player', 'Dealer');
    return 'Player';
  } else {
    prompt(`It's a tie!`);
    displayResults(playerCards, dealerCards, 'Player', 'Dealer');
    return null;
  }
}

function results(winnersCards) {
  let winnersTotal = total(winnersCards);
  return winnersTotal;
}

function displayResults(winnersCards, losersCards, winner, loser) {
  let winnerTotal = total(winnersCards);
  let loserTotal = total(losersCards);
  console.log(`==============`);
  if (winnerTotal === loserTotal) {
    prompt(`${winner}'s hand: (total of ${winnerTotal})`);
    console.log(winnersCards);
    prompt(`${loser}'s hand: (total of ${loserTotal})`);
    console.log(losersCards);
    console.log(`==============`);
    prompt(`${winner} and ${loser} tied! ${winner}'s score was: ${results(winnersCards)} and ${loser}'s score was: ${results(losersCards)}`);
  } else {
    prompt(`${winner}'s hand: (total of ${winnerTotal})`);
    console.log(winnersCards);
    prompt(`${loser}'s hand: (total of ${loserTotal})`);
    console.log(losersCards);
    console.log(`==============`);
    prompt(`${winner} won the game! ${winner}'s score was: ${results(winnersCards)} and ${loser}'s score was: ${results(losersCards)}`);
  }
}

function shuffle(deck) {
  for (let index = 0; index < DECK.length; index++) {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
  }
}

function initializeDeck() {
  createDeck();
  shuffle(DECK);
}

function giveSomeoneFirst2Cards() {
  let someonesDeck = [];
  someonesDeck.push(DECK[0]);
  DECK.shift();
  someonesDeck.push(DECK[0]);
  DECK.shift();
  return someonesDeck;
}

function displayDeck(someonesHand) {
  prompt(`This is your current hand: (total of ${total(someonesHand)})`);
  console.log(someonesHand);
}

function playAgain() {
  prompt(`Would you like to play again?`);
  let answer = readline.question().toLowerCase();
  while (!CONTINUE_VALUES.includes(answer)) {
    prompt(`Invalid response please enter yes or no:`);
    answer = readline.question().toLowerCase();
  }
  if ((answer === 'y') || (answer === 'yes')) {
    return true;
  } else {
    prompt(`Thank you for playing ${GAME_OF_VALUE}, have a good day!`);
    return false;
  }
}

function finalWinnerDisplay(playerScore, dealerScore) {
  if (playerScore === 5) {
    prompt(`Player wins the match!`);
    console.log(`============================`);
  } else if (dealerScore === 5) {
    prompt(`Dealer wins the match!`);
    console.log(`============================`);
  }
}

let cont = true;
while (cont) {
  let playerScore = 0;
  let dealerScore = 0;
  prompt(`Welcome to the game of ${GAME_OF_VALUE}!`);
  prompt(`Score 5 points to win!`);
  while (playerScore !== 5 && dealerScore !== 5) {
    prompt(`---New round---`);
    initializeDeck();
    let playersInitialDeck = giveSomeoneFirst2Cards();
    displayDeck(playersInitialDeck);
    let winner = playerTurn(playersInitialDeck);
    if (winner === 'Player') {
      playerScore++;
    } else if (winner === 'Dealer') {
      dealerScore++;
    }
    prompt(`Player has ${playerScore} point(s). Dealer has ${dealerScore} point(s).`);
  }
  finalWinnerDisplay(playerScore, dealerScore);
  cont = playAgain();
}
