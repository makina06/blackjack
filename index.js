let firstCard = 11;
let secondCard = 2;
let sum = firstCard + secondCard;
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let playEl = document.getElementById("play-el");
let message = "";

function startGame() {
  cardEl.textContent += " " + firstCard + " " + secondCard;
  sumEl.textContent += " " + sum;
  if (sum < 21) {
    message = " You can pick another card";
  } else if (sum === 21) {
    message = " Blackjack ! Whoo-hoo!";
  } else message = "You  are out of the game";

  playEl.textContent = message;
}
