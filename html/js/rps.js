var userChoice = "";
var computerChoice = "";

var makeChoice = function(choice) {
    userChoice = choice;
    computerChoice = Math.random();
    
    //Converts random number into a choice
    if(computerChoice <= 0.33) {
        computerChoice = "rock";
    }
    else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    
    console.log("User choice: " + userChoice);
    console.log("Computer choice: " + computerChoice);
    
    console.log(compare(userChoice, computerChoice));
    
    
    //If it's a tie then run function again
    if (compare(userChoice, computerChoice) == "It's a tie!") {
        makeChoice();
    }
    userchoice = "";
    computerChoice = "";
};

var compare = function(choice1, choice2) {
    //Checks if the choices are the same
    if(choice1 == choice2) {
        return "It's a tie!";
    }
    //Figuires out who wins by comparing choices
    else if(choice1 == "rock") {
        if(choice2 == "paper") {
            return "Paper wins!";
        }
        else {
            return "Rock wins!";
        }
    }
    else if(choice1 == "paper") {
        if(choice2 == "scissors") {
            return "Scissors wins!";
        }
        else {
            return "Paper wins!";
        }
    }
    else if(choice1 == "scissors") {
        if(choice2 == "rock") {
            return "Rock wins!";
        }
        else {
            return "Scissors wins!";
        }
    }
};
