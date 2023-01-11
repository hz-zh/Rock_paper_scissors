const compScoreDisplay = document.querySelector('.compScore');
const playerScoreDisplay = document.querySelector('.playerScore');
const resultField = document.querySelector('.result');
const gamePlay = document.querySelector('.gameDisplay');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttons = document.querySelector('.buttons');


let roundCount = 0;
let playerChoice;
let compScore = 0;
let playerScore = 0;
let reset;

function getComputerChoice() {
   const choices = ['rock', 'paper', 'scissors'];
   const randomElement = choices[Math.floor(Math.random() * 3)];
   return randomElement;
}

function game() {
   gamePlay.style.display = 'none';
   
   
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

function playRound() {
   gamePlay.style.display = 'flex';

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
   if (roundCount >= 5) {
      gameEnd();
   }
}

function gameEnd () {
   buttons.style.display = 'none';

   if (compScore > playerScore) {
      resultField.textContent = "You lost this game."
   }
   else { resultField.textContent = "You won!!!"}

   reset = document.createElement("button");
   reset.innerHTML = "Play Again";
   document.getElementById("gameDisplayID").appendChild(reset);

   reset.onclick = function() {resetGame()};
}

function resetGame() {
   gamePlay.style.display = 'none';
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