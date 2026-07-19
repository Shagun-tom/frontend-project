let userTurnCount = document.getElementById("userTurnCount");
let computerTurnCount = document.getElementById("computerTurnCount");

const userResult = document.getElementById("userScore");
const computerResult = document.getElementById("computerScore");
const option = document.getElementById("option");
const result = document.getElementById("finalResult");
const reset = document.getElementById("reset");

let turn = 1;
let userScore = 0;
let computerScore = 0;

option.addEventListener("click", (e) => {
    let userChoice = e.target.parentElement.id;
    if (userChoice === "choose_paper") {
        userChoice = "paper";
    } else if (userChoice === "choose_scissor") {
        userChoice = "scissors"
    } else {
        userChoice = "stone";
    }
    console.log("user : " + userChoice);
    let arr = ["paper", "stone", "scissors"];
    let computerChoice = arr[Math.floor(Math.random() * 3)];
    console.log("computer : " + computerChoice);
    userTurnCount.innerHTML = turn;
    computerTurnCount.innerText = turn;
    turn++;


    if ((userChoice === "paper" && computerChoice === "scissors") || (userChoice === "stone" && computerChoice === "paper") || (userChoice === "scissors" && computerChoice === "stone")) {
        computerResult.innerText = ++computerScore;
    } else if ((computerChoice === "paper" && userChoice === "scissors") || (computerChoice === "stone" && userChoice === "paper") || (computerChoice === "scissors" && userChoice === "stone")) {
        userResult.innerText = ++userScore;
    }
    
    result.style.display = "block";


    if (userScore > computerScore) {
        result.innerText = "🎉Congratulation You won! \n User : " + userChoice + " | Computer : " + computerChoice;
    } else if (userScore < computerScore) {
        result.innerText = "😐 Computer won!\n User : " + userChoice + " | Computer : " + computerChoice;
    } else {
        result.innerText = "😅 Draw!\n User : " + userChoice + " | Computer : " + computerChoice;
    }

});




reset.addEventListener("click", () => {
    turn = 1;
    userScore = 0;
    computerScore = 0;
    userTurnCount.innerHTML = 0;
    computerTurnCount.innerText = 0;
    userResult.innerText = userScore;
    computerResult.innerText = 0;
    result.style.display = "none";
});

