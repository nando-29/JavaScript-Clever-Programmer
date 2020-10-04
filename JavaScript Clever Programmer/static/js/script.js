// Challenge 1: Your Age in Days

const resultDays = document.getElementById("flex-box-result");

function ageInDays() {
    let birth = prompt("What year were you born ?");
    let result = (2018 - birth) * 365;
    resultDays.innerHTML = "<h1>You are " + result + " days old</h1>";
}

function reset() {
    resultDays.innerHTML = "";
}


// Challenge 2: Generate Cat

function generateCat() {
    const image = document.createElement("img");
    const div   = document.getElementById("flex-cat-gen");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}


// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());

    result = decideWinner(humanChoice, botChoice);
    console.log("result " + result);

    message = finalMessage(result);
    console.log(message);

    rpsFrontEnd(humanChoice, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, botChoice) {
    const rpsDatabase = {
        "rock": {"scissors": 1, "rock": 0.5, "paper": 0},
        "paper": {"rock": 1, "paper": 0.5, "scissors": 0},
        "scissors": {"paper": 1, "scissors": 0.5, "rock": 0}
    }

    let yourScore = rpsDatabase[yourChoice][botChoice];
    let botScore = rpsDatabase[botChoice][yourChoice]; 

    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return {"message": "You lost", "color": "red"}
    } else if (yourScore === 0.5) {
        return {"message": "You tied", "color": "yellow"}
    } else {
        return {"message": "You won", "color": "green"}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    const imagesDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }

    // Let's remove all images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    let humanDiv = document.createElement("div");
    let botDiv = document.createElement("div");
    let messageDiv = document.createElement("div");
    
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' width='150px' height='150px' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
    
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage["color"] + "; font-size: 60px; padding: 30px'>" + finalMessage["message"] + "</h1>"

    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' width='150px' height='150px' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>"

    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}


// Challenge 4: Change the Color of All Buttons
let all_buttons = document.querySelectorAll("button");

let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(yourClick) {
    if(yourClick.value === "red") {
        buttonRed();
    } else if(yourClick.value === "green") {
        buttonGreen();
    } else if (yourClick.value === "reset") {
        buttonColorReset();
    } else {
        randomColors();
    }
}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        let class_list = all_buttons[i].classList[1];
        all_buttons[i].classList.remove(class_list);

        all_buttons[i].classList.add("btn-danger");
    }
}

function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        let class_list = all_buttons[i].classList[1];
        all_buttons[i].classList.remove(class_list);

        all_buttons[i].classList.add("btn-success");
    }
}

function randomColors() {
    for (let i = 0; i < all_buttons.length; i++) {
        let class_list = all_buttons[i].classList[1];
        all_buttons[i].classList.remove(class_list);

        let random = Math.floor(Math.random() * 7);

        all_buttons[i].classList.add(copyAllButtons[random]);
    }
}

function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        let class_list = all_buttons[i].classList[1];
        all_buttons[i].classList.remove(class_list);

        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}