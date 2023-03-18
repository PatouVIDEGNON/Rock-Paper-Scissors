console.log("Rock Paper Scissors");

/**
 * 
 * Your game is going to play against the computer,
 *  so begin with a function called getComputerChoice
 *  that will randomly return either ‘Rock’, ‘Paper’ or 
 * ‘Scissors’. We’ll use this function in the game to 
 * make the computer’s play. Tip: use the console to make sure this is returning 
 * the expected output before moving to the next step!
 */


function getComputerChoice(array) {

    const dataRandom = Math.floor(Math.random()*array.length);
     const result = array[dataRandom]
     return result
}

const myArray = new Array("rock", "paper", "scissors");



//console.log(computerSelection);

/**
 * Write a function that plays a single round of Rock 
 * Paper Scissors. 
 * The function should take two parameters - the
 *  playerSelection and computerSelection - and then
 *  return a string that declares the winner of the 
 * round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter 
case-insensitive (so users can input rock, ROCK, RocK 
     any other variation).
 * 
 */

     // recuperer la selection du chaque selection du joueur : 
      const rock = document.querySelector('.rock');
      const paper = document.querySelector('.paper');
      const scissors = document.querySelector('.scissors');
    
     console.log(rock);

      // au clique du joueur lancer une fonction:

      rock.addEventListener('click', jouerUneRound);
      paper.addEventListener('click', jouerUneRound);
      scissors.addEventListener('click', jouerUneRound);

      function jouerUneRound(e, computerSelection, playerSelection ) {
         
         computerSelection = getComputerChoice(myArray);
         playerSelection = " ";
         playerSelection += e.target.id;
         console.log(`voici la selection du joueur : ${playerSelection}`);
         console.log(`Voici la selection de l'ordinateur : ${computerSelection}`);
      }

