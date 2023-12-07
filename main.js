/*
*Por el momento, sólo va a poder jugarse por la consola del navegador, 
más adelante lo revisitamos. 

Ejercicios antes de empezar: tres maneras de incluir javascript en una página. 

Nuestro jugador va a jugar contra la computadora. 


*/

//console.log('Hola, desde el script!');

const option = ['paper', 'rock', 'scissors'];

function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3) + 1); 
    return option[choice - 1];
}


let resultRandom = (Math.random() * 3);

function playRound(playerSelection, computerSelection){
    /*
    Rock beats Scissor
    Scissor beats paper 
    paper beats rock 
    */
    let winner = ""; 
    if(playerSelection == option[0]){
        winner = (computerSelection == option[0]) ?   "Tie!" : 
                    (computerSelection == option[1]) ? "Player" : 
                        computerSelection == option[2] ? "Computer" : "";
    }
    else if(playerSelection == option[1]){
        winner = (computerSelection == option[1]) ?  "Tie!" : 
                    (computerSelection == option[2]) ? "Player" : 
                        computerSelection == option[0] ? "Computer" : "";
    }
    else if(playerSelection == option[2]){ 
        winner = (computerSelection == option[2]) ?  "Tie!" : 
                    (computerSelection == option[0]) ? "Player" : 
                        computerSelection == option[1] ? "Computer" : "";
    }
    return winner;
} 


function game(number, playerSelection){
    let playerCount = 0;
    let computerCount = 0;


    for (let index = 0; index < number-1; index++) {
        let winner = playRound(playerSelection, getComputerChoice());
        if (winner == "Player"){
                playerCount++;
        }else if(winner == "Computer"){
                computerCount++;
        }
        //console.log(playerCount);
    }
    if(playerCount > computerCount){
        console.log(`You win! you're score: ${playerCount}. Computer score: ${computerCount}.`);
    }else if(computerCount > playerCount){
        console.log(`You lose! :( \n  you're score: ${playerCount}. Computer score: ${computerCount}.`);
    }else{
        console.log('tie');
    }

}













/* console.log(`Resultado random * 3 = ${resultRandom}`);
console.log(`Resultado random * 3 + 1 = ${resultRandom + 1}`);
console.log(getComputerChoice()); */