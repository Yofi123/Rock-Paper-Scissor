
let computerSelect;
let draw = 0;;
let win = 0;
let lose = 0;
let player;


function getComputerChoice(){
    let a = Math.floor(Math.random()*3)+1;
    if(a==1){
        computerSelect == "ROCK";
    }else if(a == 2){
        computerSelect = "PAPER";
    }else{
        computerSelect = "SCISSOR";
    } 
    
    return "The computer have selected " + computerSelect;
}

function getPlayerChoice(){
    player = window.prompt("ROCK, PAPER or SCISSOR");
    player = player.toUpperCase();

    return "The player have selected " +  player;
}

const playerselection = console.log(getPlayerChoice());


function playRound(playerselection, computerSelection){
    if(player == "ROCK" && computerSelect == "ROCK"){
        draw++;
        return "It,s a draw";
        
    }else if(player == "ROCK" && computerSelect == "PAPER"){
        lose++;
        return "you lose";
       
    }else if(player == "ROCK" && computerSelect == "SCISSOR"){
        win++;
        return "you win";
      
    }else if(player == "PAPER" && computerSelect == "ROCK"){
        win++;
        return "you win";
      
    }else if(player == "PAPER" && computerSelect == "PAPER"){
        draw++;
        return "It,s a draw";
        
    }else if(player == "PAPER" && computerSelect == "SCISSOR"){
        lose++;
        return "you lose";
    
    }else if(player == "SCISSOR" && computerSelect == "ROCK"){
        lose++;
        return "you lose";
       
    }else if(player == "SCISSOR" && computerSelect == "PAPER"){
        win++;
        return "you win";
        
    }else{
        draw++;
        return "It,s a draw";
        
    }

}


function game(){
    for(let i=0; i<5; i++){
        const computerSelection = console.log(getComputerChoice());
        console.log(playRound(playerselection, computerSelection));
    
    }
    if((win> lose) && (win> draw)){
        console.log("You have won");
    }else if((lose> win) && (lose> draw)){
        console.log("You have lost");
    }else{
        console.log("It,s a draw");
    }
}

game();

