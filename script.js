const compScoreDisplay = document.querySelector('.compScore');
const playerScoreDisplay = document.querySelector('.playerScore');
const resultField = document.querySelector('.result');
const gamePlay = document.querySelector('.paras');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


let roundCount = 0;
let playerChoice;
let compScore = 1;
let playerScore = 1;
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
      console.log(roundCount);
      playRound();   
   });
   
   paper.addEventListener('click',() => {    
      playerChoice = 'paper';
      console.log(roundCount);
      playRound(); 
   });
   
   scissors.addEventListener('click',() => {    
      playerChoice = 'scissors';
      console.log(roundCount);
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
   if (compScore > playerScore) {
      resultField.textContent = "You lost this game!"
   }
   else { resultField.textContent = "You won!!!"}

   reset = document.createElement("button");
   reset.innerHTML = "Play Again";
   document.getElementById("myDIV").appendChild(reset);

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
   document.getElementById("myDIV").removeChild(reset);
}

game();

 