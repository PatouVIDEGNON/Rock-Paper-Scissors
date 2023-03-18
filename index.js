console.log("Rock Paper Scissors");


/**
 * Debut du code ici index.js ici
 */


function getComputerChoice(array) {
    const dataRandom = Math.floor(Math.random()*array.length);
     const result = array[dataRandom];   
     return result
}

const myArray = new Array("rock", "paper", "scissors");
const computerSelection = getComputerChoice(myArray)

