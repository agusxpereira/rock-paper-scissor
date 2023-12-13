const option = ['paper', 'rock', 'scissors'];

function getComputerChoice(){
    let choice = Math.floor((Math.random() * option.length) + 1); 
    return option[choice - 1];
}


let resultRandom = (Math.random() * 3);

function playRound(playerSelection, computerSelection){
    /*
    Rock beats Scissor
    Scissor beats paper 
    paper beats rock 
    */
    let player = playerSelection.toLowerCase();

    let winner = ""; 
    if(player == option[0]){
        winner = (computerSelection == option[0]) ?   "Tie!" : 
                    (computerSelection == option[1]) ? "Player" : 
                        computerSelection == option[2] ? "Computer" : "";
    }
    else if(player == option[1]){
        winner = (computerSelection == option[1]) ?  "Tie!" : 
                    (computerSelection == option[2]) ? "Player" : 
                        computerSelection == option[0] ? "Computer" : "";
    }
    else if(player == option[2]){ 
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