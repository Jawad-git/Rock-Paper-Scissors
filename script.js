function getComputerChoice(){
    let x= Math.random();
    let m;
    if (x <= 0.33) {
        return "rock";
    } 
        else if (x <= 0.66) {
            return "paper";
        }
            else {
                return "scissors";
            } }

function playerSelection(){
    console.log("enter rock, paper, or scissors");
    let m = prompt("choose: rock, paper, or scissors");
    return m.toLowerCase();
}
// control shift l edit uniform word

function playGame (n, m) {
    if (n == m) {   
        return(`its a tie! try again.`);
    }
    else if ((n == "scissors" && m == "paper") || (n=="paper" && m=="rock") || (n == "rock" && m == "scissors")) {
        return( `You win!${n} beats ${m}!`); 
    }
        else {
            return(`you lose, ${m} beats ${n}!`) 
        }
}

let rock, scissors, paper;
console.log(playGame(playerSelection(), getComputerChoice()));