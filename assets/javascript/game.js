//create variables for current number, gems, wins, and losses
var currentNumber = 0;
var score = 0;

var agate = 0;
var amethyst = 0;
var jasper = 0;
var jade = 0;

var wins = 0;
var losses = 0;

let gameIsOn = false;

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
  amethyst = gemRound();
  jasper = gemRound();
  jade = gemRound();
  //     $(".crystal").each(function() {
  //         $(this).attr("crystalValue", gemRound());
  //     })
}

//onclick event linked to each gem and random numbers
function newGame() {
  gemValue();
  score = 0;
  currentNumber = currentRound();
  $("#wins").text(wins);
  $("#losses").text(losses);
  $("#current-number").text(currentNumber);
  $("#score").text(score);
}

$("#start-game").on("click", newGame);
//buttons to add gem numbers to user score
$("#agate").on("click", function() {
  score += agate;
  $("#score").text(score);
  checkScore();
});
$("#amethyst").on("click", function() {
  score += amethyst;
  $("#score").text(score);
  checkScore();
});
$("#jasper").on("click", function() {
  score += jasper;
  $("#score").text(score);
  checkScore();
});
$("#jade").on("click", function() {
  score += jade;
  $("#score").text(score);
  checkScore();
});

//if score adds up to random number, user wins
function checkScore() {
  if (score === currentNumber) {
    wins++;
    newGame();
  } else if (score > currentNumber) {
    losses++;
    newGame();
  }
}
