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

const butt1 = document.querySelector(".button1");
const butt2 = document.querySelector(".button2");
const butt3 = document.querySelector(".button3");

const result = document.querySelector(".result");
const win = document.createElement("div");
const draw = document.createElement("div");
const loss = document.createElement("div");

function winner(){
    win.textContent = "you win!";
    result.appendChild(win);
}

butt1.addEventListener("click", () => {
    if (playRound("rock", getComputerChoice()) == "win")
        winner();
        
    
})

butt2.addEventListener("click", () => {
    if (playRound("paper", getComputerChoice()) == "win" )
        alert

})

butt3.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
})