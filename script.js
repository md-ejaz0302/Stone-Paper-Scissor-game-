let user_score = 0;
let comp_score = 0;
let comp = document.querySelector("#computer-score")
let user = document.querySelector("#user-score")
let score_board = document.getElementsByClassName("score-board")
let _result = document.querySelector("#_result")
let result = document.querySelector(".result")
let r = document.getElementById("R")
let p = document.getElementById("P")
let s = document.getElementById("S")

function getcomputerChoice() {
    const choices = ['r', 'p', 's']
    const choice = Math.floor(Math.random() * 3)
    return choices[choice]
}

function converttowords(letter) {
    if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    return "Scissor";
}

function win(userChoice, computerChoice) {
    user_score++;
    user.innerHTML = user_score;
    comp.innerHTML = comp_score;
    _result.innerHTML = `${converttowords(userChoice)} beats ${converttowords(computerChoice)}. You win!`
}

function lose(userChoice, computerChoice) {
    comp_score++;
    comp.innerHTML = comp_score;
    user.innerHTML = user_score;
    _result.innerHTML = `${converttowords(userChoice)} beaten by ${converttowords(computerChoice)}. You lose!`
}

function draw(userChoice, computerChoice) {
    _result.innerHTML = `${converttowords(userChoice)} cannot beat ${converttowords(computerChoice)}. DRAW!`
}

function game(userChoice) {
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice)
            break;
    }

}

function main() {
    r.addEventListener("click", function () {
        game("r")
    })

    p.addEventListener("click", function () {
        game("p")
    })

    s.addEventListener("click", function () {
        game("s")
    })
}

main()