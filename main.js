

const selectionPlayer = document.querySelector('#selections-player');
const selectionComputer = document.querySelector('#selections-pc');
let playerCount = 0;
let computerCount = 0;
let counter = 0;

const option = ['paper', 'rock', 'scissor'];

function getComputerChoice(){
    let choice = Math.floor((Math.random() * option.length) + 1); 
    return option[choice-1];
}

function playRound(playerSelection, computerSelection){
    /*
    Rock beats Scissor
    Scissor beats paper 
    paper beats rock 
    */
    let computer = computerSelection;

    let winner = ""; 

    let result = [];
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
    /*we have to push in this orden: 0[winner], 1[player, 2[computer]] */
    result.push(winner); 
    result.push(playerSelection);
    result.push(computer);

    /*Game against machine here:*/
    if (result[0] == "Player"){
        playerCount++;
        let newImg = new Image(50, 50);
        newImg.src = `images/${result[1]}.png`;
        selectionPlayer.appendChild(newImg);
        
    }else if(result[0] == "Computer"){
        computerCount++;
        let newImg = new Image(50, 50);
        newImg.src = `images/${result[2]}.png`; 
        selectionComputer.appendChild(newImg);
    } 

} 


