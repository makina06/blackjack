let firstCard = getRandomCard();
let secondCard = getRandomCard();
let newCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let playEl = document.getElementById("play-el");
let message = "";

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 11 + 1);
  return randomCard;
}
getRandomCard();
function startGame() {
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Card: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = " You can pick another card";
  } else if (sum === 21) {
    message = " Blackjack ! Whoo-hoo!";
  } else message = "You  are out of the game";

  playEl.textContent = message;
}

function getNewCard() {
  sum += newCard;
  cards.push(newCard);
  renderGame();
}
