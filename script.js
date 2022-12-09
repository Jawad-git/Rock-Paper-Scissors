function getComputerChoice(){

}

function playerSelection(){
    console.log("enter rock, paper, or scissors");
    let m= prompt("choose: rock, paper, or scissors");
    return m.toLowerCase();
}


function playGame (n, m) {
    if (n == m) {   
        console.log(`its a tie! try again.`);
    }
    else if ((n == scissors && m == paper) || (n==paper && m==rock) || (n == rock && m== scissors)) {
        console.log( `You win!${n} beats ${m}!`); 
    }
        else {
            console.log(`you lose, ${m} beats ${n}!`)
        }
}


let scissors, rock, paper;

playGame(playerSelection, "paper");

