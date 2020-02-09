var choices = ["Rock", "Paper", "Scissors"]

var userScore = document.getElementById("usr-score")
var cpuScore = document.getElementById("cpu-score")
var round = document.getElementById("round-details")

const winningMatrix = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0]
]

const computerPlay = () => Math.floor((Math.random()*3))

const playRound = (playerSelection) => {
    computerSelection = computerPlay();
    focusOnSelection(choices[playerSelection], choices[computerSelection], winningMatrix[playerSelection][computerSelection]);
    if(winningMatrix[playerSelection][computerSelection] == 1) {
        round.innerHTML = ("You Win! " + choices[playerSelection] + " beats " + choices[computerSelection])
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
    }
    else if(winningMatrix[playerSelection][computerSelection] == -1) {
        round.innerHTML =("You Lost! " + choices[computerSelection] + " beats " + choices[playerSelection])
        cpuScore.innerHTML = parseInt(cpuScore.innerHTML) + 1;
    }
    else {
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
        cpuScore.innerHTML = parseInt(cpuScore.innerHTML) + 1;
        round.innerHTML = ("It's a Tie! " + choices[computerSelection] + " - " + choices[playerSelection])
    }
}

const focusOnSelection = (user, cpu, winner) => {
    var selections = document.getElementsByClassName("selections")[0].children
    for (var i = 0, len = selections.length; i < len; i++) {
        selections[i].classList.remove("userSelected","cpuSelected","bothSelected","winner")
    }
    setTimeout(()=>{
        document.getElementById(winner > 0 ? user : cpu).classList.add("winner")
    } ,50)
    if(user != cpu) {
        document.getElementById(user).classList.add("userSelected")
        document.getElementById(cpu).classList.add("cpuSelected")
    }
    else {
        document.getElementById(user).classList.add("bothSelected")
    }

}