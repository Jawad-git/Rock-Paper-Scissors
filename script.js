function getComputerChoice(){
    let x= Math.random();
    if (x <= 0.33) {
        return "rock";
    } 
        else if (x <= 0.66) {
            return "paper";
        }
            else {
                return "scissors";
            } }
// function getComputerChoice()
// {
//     let x = Math.floor(Math.random() * 3);
//     let choices = ["rock", "paper", "scissors"];
//     return choices[x];
// }

function playerSelection(){
    let m = prompt("choose: rock, paper, or scissors");
    return m.toLowerCase();
}
// control shift l edit uniform word

function playRound (n, m) {
    if (n == m) {   
        return "draw";
    }
    else if ((n == "scissors" && m == "paper") || (n=="paper" && m=="rock") ||
     (n == "rock" && m == "scissors")) {
        return "win";
    }
        else {
            return "loss";
        }
}

function Game(){
    let myscore=0, pcscore=0, roundresult;
    for (let i=0; i<5; i++) {
        roundresult = playRound(playerSelection(), getComputerChoice()); 
        if (roundresult == "draw") {
            console.log(`its a draw. the score remains: you ${myscore} - ${pcscore} computer`);
    }
        if (roundresult == "win") {
            myscore++;
            console.log(`its a Victory! the score changes to: you ${myscore} - ${pcscore} computer`);
    }
        if (roundresult == "loss") {
            console.log(`its a loss.. the score changes to: you ${myscore} - ${++pcscore} computer`);
    }


}
    if (myscore > pcscore) {
        console.log("Game completed, you win!")
    }
        else if (myscore < pcscore) {
            console.log("Unfortunately you lose, game over")
        }
            else {
                console.log("Would you look at that! its a tie!")
            }
}
// let myscore, pcscore
Game();