/* 
first add up all non Ace cards. 
if the total of that is more than 10, then count all aces as ones
if total is less than 10, then take one ace and count it as 11.
if there are any more aces, then count the rest as ones. 
then count the total value, if total is more than 21, count all aces as 1.
continue this process until the player chooses to stay or until all values including aces are exceeding 21
*/
const SUITS = [ 'H', 'D', 'C', 'S' ];
const VALUES = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
const DECK = [];
const VALUE_LETTERS = ['J', 'Q', 'K', 'A'];

function createDeck() {
  for (let i = 0; i < SUITS.length; i++) {
    for (let j = 0; j < VALUES.length; j++) {
      DECK.push([SUITS[i],VALUES[j]]);
    }
  }
}
createDeck();

function total(cardsDealtToPlayer) {
  let totalWithoutAces = 0;
  let total = 0;
  let totArrOfValues = cardsDealtToPlayer.map(card => {
    return card[1];
  });
  for (let vals = 0; vals < totArrOfValues.length; vals++) {
    if (totArrOfValues[vals] !== 'A') {
      if (!VALUE_LETTERS.includes(totArrOfValues[vals])) {
        totalWithoutAces += totArrOfValues[vals];
      }
    }
  }
}
let cardsTest = [DECK[0], DECK[1], DECK[36]];
console.log(cardsTest);
total(cardsTest);
