
const option = ['paper', 'rock', 'scissor'];

const selectionPlayer = document.querySelector('#selections-player');
const selectionComputer = document.querySelector('#selections-pc');
const buttonPlay = document.querySelectorAll('.play-ui'); 
const score = document.querySelector("div.score"); 
const reset = document.querySelector("#reset"); 




let playerCount = 0;
let computerCount = 0;
let counter = Number(document.querySelector('#best-of').value);



function getComputerChoice(){
    let choice = Math.floor((Math.random() * option.length) + 1); 
    return option[choice-1];
}

function createImage(url){
    let newImg = new Image(50, 50);
    newImg.src = `images/${url}.png`;
    return newImg;
}

function playRound(playerSelection, computerSelection){

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
    result.push(computerSelection);

    /*Game against machine here:*/
    if (result[0] == "Player"){
        playerCount++;
        let newImg = createImage(result[1]);
        selectionPlayer.appendChild(newImg);
        
    }else if(result[0] == "Computer"){
        computerCount++;
        let newImg = createImage(result[2]);
        selectionComputer.appendChild(newImg);
    } 

} 
//game
//let round = Number(document.querySelector('#best-of').value);
let round = 0;

buttonPlay.forEach(button => {
    button.addEventListener('click', ()=>{
        let bestOf = counter;
        if(round < bestOf){
            playRound(button.id, getComputerChoice());    
            round++;
            console.log(round);
        }else{
            if(playerCount > computerCount && score.innerHTML == ""){
                let p = document.createElement('p');
                p.innerHTML = `You win! :D  
                \n score: ${playerCount}.`;
                score.appendChild(p);
            }else if(computerCount > playerCount && score.innerHTML == ""){
                let p = document.createElement('p');
                p.innerHTML = `You lose! :( 
                    score: ${playerCount}.`;
                score.appendChild(p);
            }else if(playerCount == computerCount){
                score.innerHTML = "<p> Tie!  </p>";
                
            }
        }
    });
}); 

reset.addEventListener("click", ()=>{
    selectionPlayer.innerHTML = "";
    selectionComputer.innerHTML = ""; 
    counter = Number(document.querySelector('#best-of').value);
    score.innerHTML = ""; 
    playerCount = 0;
    computerCount = 0;
    round = 0; 

});

