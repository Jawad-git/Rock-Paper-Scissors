function getComputerChoice(){
    let x = Math.random();
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
let myscore = 0, pcscore = 0;
const butt1 = document.querySelector(".button1");
const butt2 = document.querySelector(".button2");
const butt3 = document.querySelector(".button3");

const result = document.querySelector(".result");
const win = document.createElement("div");
const draw = document.createElement("div");
const loss = document.createElement("div");

function winner(){
    win.textContent = `you win! the score is now: Player ${++myscore} - ${pcscore} Computer`;
    result.appendChild(win);
}

function Loser(){
    win.textContent = `you Lose! the score is now: Player ${myscore} - ${++pcscore} Computer`;
    result.appendChild(loss);
}

function Draw(){
    win.textContent = `its a tie! the score remains: Player ${myscore} - ${pcscore} Computer`;
    result.appendChild(draw);
}

function checkScore (m) {
    if (m == "win")
        return winner();
    else if (m == "draw")
        return Draw();
        else 
            return Loser();
}



// function scoreTrack(Q) {
//     while ( myscore < 5 && pcscore < 5) {
//         if (score = "win") {

//         }


//     }
// }


butt1.addEventListener("click", () => {
    let score = playRound("rock", getComputerChoice());
        checkScore (score);
        endGame();
})

butt2.addEventListener("click", () => {
    let score = playRound("paper", getComputerChoice());
        checkScore (score);
        endGame();

})

butt3.addEventListener("click", () => {
    let score = playRound("scissors", getComputerChoice())
        checkScore (score);
        endGame();
})
function endGame(){
if (myscore == 5) {
    console.log(myscore);
    return alert("Congratulations, you win the whole game! reload the webpage to play again");
}
else if (pcscore == 5){
    return alert("Unfortunately, you lost :/.. reload the webpage to have another go!");
}
}