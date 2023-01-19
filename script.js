const compScoreDisplay = document.querySelector('.compScore');
const playerScoreDisplay = document.querySelector('.playerScore');
const resultField = document.querySelector('.result');
const gameDisplay = document.querySelector('.gameDisplay');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttons = document.querySelector('.buttons');
const roundCounter = document.querySelector('.round');


let roundCount = 0;
let playerChoice;
let compScore = 0;
let playerScore = 0;
let reset;
// let isAnimated;

function game() {
   gameDisplay.style.display = 'none';
   
   rock.addEventListener('click',() => {    
      playerChoice = 'rock';
      playRound();   
   });
   
   paper.addEventListener('click',() => {    
      playerChoice = 'paper';
      playRound(); 
   });
   
   scissors.addEventListener('click',() => {    
      playerChoice = 'scissors';
      playRound();
   });
}

function getRoundNumber (n) {
   string = document.querySelector('.round');
   string.textContent = `ROUND# \xa0\xa0\xa0${n}`;
}

function getComputerChoice() {
   const choices = ['rock', 'paper', 'scissors'];
   const randomElement = choices[Math.floor(Math.random() * 3)];
   return randomElement;
}

function playRound() {
   gameDisplay.style.display = 'flex';
   // toggleGameDisplay(); // This is for upcoming animation
   // isAnimated = false;  // This is for upcoming animation

   computerChoice = getComputerChoice();

   console.log(playerChoice);
   console.log(computerChoice);

   if (playerChoice == computerChoice) {
      resultField.textContent = "This round is a draw!";
   }
   else if ((playerChoice == 'rock' && computerChoice == 'scissors') 
   || (playerChoice == 'paper' && computerChoice == 'rock') 
   || (playerChoice == 'scissors' && computerChoice == 'paper'))
   {
      resultField.textContent = "You won this round!";
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
   }
   else { 
      resultField.textContent = "You lost this round.";
      compScore++;
      compScoreDisplay.textContent = compScore;
   }
   roundCount++;

   getRoundNumber(roundCount);
   if ( (playerScore >= (compScore + 2) || compScore >= (playerScore + 2)) && roundCount > 3 ) {
      gameEnd();
   }
   else if (roundCount >= 5) {
      gameEnd();
   }
}

function gameEnd () {
   buttons.style.display = 'none';

   if (compScore > playerScore) 
   { resultField.textContent = "You lost this game." }
   else if (playerScore > compScore)
   { resultField.textContent = "You won!!!" }
   else { resultField.textContent = "The game is a draw! No one wins." }

   reset = document.createElement("button");
   reset.innerHTML = "Play Again";
   document.getElementById("gameDisplayID").appendChild(reset);

   reset.onclick = function() {resetGame()};
}

function resetGame() {
   //toggleGameDisplay(); // This is for upcoming animation
   gameDisplay.style.display = 'none';
   roundCount = 0;
   compScore = 0;
   playerScore = 0;
   playerScoreDisplay.textContent = playerScore;
   compScoreDisplay.textContent = compScore;
   resultField.textContent = "";
   document.getElementById("gameDisplayID").removeChild(reset);
   buttons.style.display = 'flex';
}

game();

/* Below this line is animation development in the works

function foo(elem, num) {
   let initialWidth = Number(elem.style.height.slice(0, 1));
   let i = initialWidth ? num : 0;
   let direction = initialWidth ? -1 : 1;
 
   function bar() {
     elem.style.height = i + 'px';
     i += direction;
 
     if (i <= num && i >= 0)
       window.requestAnimationFrame(bar);
   }
   window.requestAnimationFrame(bar);
 
   return 
 }

 function toggleGameDisplay()
 {
   if (!isAnimated) {
     isAnimated = true;
     foo(document.getElementsByClassName('gameDisplay')[0], 200);
     return;
   }
   isAnimated = false;
   foo(document.getElementsByClassName('gameDisplay')[0], 200);
 };
 */