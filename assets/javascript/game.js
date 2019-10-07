//create variables for current number, gems, wins, and losses
var currentNumber = 0;
var agate = 0;
var amethyst = 0;
var jasper = 0;
var jade = 0;

var wins = 0;
var losses = 0;

//grab ids from html for display purposes

//create a pure function to generate a number within a range
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//create random number between 18 & 120 for the current round
function currentRound() {
  return randomRange(18, 120);
}

//each gem needs to generate a random number between 1 & 12 for current round
function gemRound() {
  return randomRange(1, 12);
}

//create function to set value per gem for each round
function gemValue() {
  agate = gemRound();
  console.log(agate);
  amethyst = gemRound();
  console.log(amethyst);
  jasper = gemRound();
  console.log(jasper);
  jade = gemRound();
  console.log(jade);
}

//onclick event linked to each gem and random numbers
//these numbers must add up into user's current score for the game

//if score adds up to random number == win
//if score adds up to more than random number == lose
//if score doesn't add up to random number, round still is going
