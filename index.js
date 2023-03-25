let firstCard = 11;
let secondCard = 3;
let newCard = 5;
let cards = [firstCard, secondCard, newCard];
let sum = firstCard + secondCard;
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let playEl = document.getElementById("play-el");
let message = "";

function startGame() {
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Card: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = " You can pick another card";
  } else if (sum === 21) {
    message = " Blackjack ! Whoo-hoo!";
  } else message = "You  are out of the game";

  playEl.textContent = message;
}

function newCards() {
  sum += newCard;
  renderGame();
}
