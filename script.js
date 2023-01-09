const compScoreDisplay = document.querySelector('.compScore');
const playerScoreDisplay = document.querySelector('.playerScore');
const resultField = document.querySelector('.result');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


let roundCount = 1;
let playerChoice;
let compScore = 0;
let playerScore = 0;

function getComputerChoice() {
   const choices = ['rock', 'paper', 'scissors'];
   const randomElement = choices[Math.floor(Math.random() * 3)];
   return randomElement;
}

function game() {
   
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
   
 
}

game();

 