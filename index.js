console.log("Rock Paper Scissors");


/**
 * Debut du code ici index.js ici
 */


function getComputerChoice(array) {
    const dataRandom = Math.floor(Math.random()*array.length);
     const result = array[dataRandom];   
     return result
}

const myArray = new Array("rock", "paper", "scissor");
const computerSelection = getComputerChoice(myArray)

// recuperation des elements du dom
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor =  document.querySelector(".scissor");
const body = document.querySelector("body");

let cpuRock = document.querySelector(".cpuRock");
let cpuPaper = document.querySelector(".cpuPaper");
let cpuScissor = document.querySelector(".cpuScissor");

let playerScore = document.querySelector('.playerScore1');
let winnerText = document.querySelector('.winner1');
let cpuScore = document.querySelector ('.cpuScore1');
let sectionPlayAgain = document.querySelector(".section-playAgain")




rock.addEventListener('click', jouerUneRound);
paper.addEventListener('click', jouerUneRound);
scissor.addEventListener('click', jouerUneRound);
sectionPlayAgain.addEventListener('click', resetGame)
body.addEventListener("click", endMessage);

let allPlayerChoice = document.querySelectorAll(".allPlayerChoice");
let allCPUChoice = document.querySelectorAll(".allCPUChoice");




function roundWinMessage() {
    winnerText.style.visibility = "visible";
    winnerText.textContent = "Bravo !!!Tu as gagné";

}


function roundLoseMessage() {
    winnerText.style.visibility = "visible";
    winnerText.textContent = "Désolé !!!Tu as perdu";

}

function roundTieMessage() {
    winnerText.style.visibility = "visible";
    winnerText.textContent = "Mince!!!!  Tu es a égalité";

}

function resetCouleur() {
let allPlayerChoiceList = Array.from(allPlayerChoice);
let allCPUChoiceList = Array.from(allCPUChoice);

allPlayerChoiceList.forEach(playerChoices => {
    playerChoices.style.backgroundColor = "#E8D5C4";

});

allCPUChoiceList.forEach(cpuChoices => {
    cpuChoices.style.backgroundColor = "EEEEEE";

});

}


function jouerUneRound(e, computerSelection, playerSelection ) {   
     computerSelection = getComputerChoice(myArray)
   playerSelection = " ";
   playerSelection = e.target.className;
   
   console.log(`playerselection: ${playerSelection}
    computerSelection: ${computerSelection}
   `); 
   

   if (playerSelection === "paper" && computerSelection === "rock") {
            resetCouleur();
           paper.style.backgroundColor = "blue";
           cpuRock.style.backgroundColor = "green"; 
           roundWinMessage();
           playerScore.textContent++;

   } else  if (playerSelection === "rock" && computerSelection === "scissor") {
    resetCouleur();
    rock.style.backgroundColor = "blue";
           cpuScissor.style.backgroundColor = "green"; 
           roundWinMessage();
           playerScore.textContent++;

   } else if (playerSelection === "scissor" && computerSelection === "paper") {
   resetCouleur();
    scissor.style.backgroundColor = "blue";
           cpuPaper.style.backgroundColor = "green"; 
           roundWinMessage();
           playerScore.textContent++;

   }
   else if (playerSelection === "rock" && computerSelection === "paper") {
    resetCouleur();
    rock.style.backgroundColor = "blue";
           cpuPaper.style.backgroundColor = "green"; 
           roundLoseMessage
           cpuScore.textContent++;

   }

   else if (playerSelection === "paper" && computerSelection === "scissor") {
   resetCouleur();
    paper.style.backgroundColor = "blue";
           cpuScissor.style.backgroundColor = "green"; 
           roundLoseMessage ()
           cpuScore.textContent++;

   }

   else if (playerSelection === "scissor" && computerSelection === "rock") {
    resetCouleur();
    scissor.style.backgroundColor = "blue";
           cpuRock.style.backgroundColor = "green"; 
           roundLoseMessage
           cpuScore.textContent++;

   } else if(playerSelection === computerSelection){
           resetCouleur();
            e.target.style.backgroundColor = "gray";
            if (e.target.className === "paper") {
                cpuPaper.style.backgroundColor = "gray";
              } else if (e.target.className === "scissor") {
                cpuScissor.style.backgroundColor = "gray";
              } else if (e.target.className=== "rock") {
                cpuRock.style.backgroundColor = "gray";
              }
              roundTieMessage()
   }

   

}




function endMessage() {
    if (playerScore.textContent >= 5) {
      winnerText.textContent = "*You WIN the game*";
      winnerText.style.color = "green";
      
  
      rock.removeEventListener("click", jouerUneRound);
      paper.removeEventListener("click", jouerUneRound);
      scissors.removeEventListener("click", jouerUneRound);
  
      sectionPlayAgain.style.visibility = "visible";
  
    } else if (cpuScore.textContent >= 5) {
        winnerText.textContent = "*CPU WINS the game*";
        winnerText.style.color = "crimson";
        
  
      rock.removeEventListener("click", jouerUneRound);
      paper.removeEventListener("click", jouerUneRound);
      scissors.removeEventListener("click", jouerUneRound);
  
      sectionPlayAgain.style.visibility = "visible";
    }
  }



  function resetGame() {
    return console.log();
  }