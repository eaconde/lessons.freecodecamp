// http://www.freecodecamp.com/challenges/waypoint-build-rock-paper-scissors

var newGame = function(msg) {
    var userChoice = "";
    var computerChoice = 0;

    msg = msg || "Do you choose rock, paper, scissors, lizard or Spock?";

    var validateUserChoice = function(userChoice) {
        var validAnswers = ["rock", "paper", "scissors", "lizard", "spock"]
        if (validAnswers.indexOf(userChoice.toLowerCase()) < 0) {
            return false;
        }
        return true;
    };

    var getUserChoice = function() {
        var initialChoice = prompt(msg);
        if (validateUserChoice(initialChoice)) {
            userChoice = initialChoice;
            return userChoice;
        } else {
            getUserChoice("Invalid choice. Do you choose rock, paper, scissors, lizard, or Spock?");
        }
    }

    getUserChoice();

    computerChoice = Math.random();
    if (computerChoice < 0.20) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.40) {
        computerChoice = "paper";
    } else if(computerChoice <= 0.60) {
        computerChoice = "scissors";
    } else if(computerChoice <= 0.80) {
        computerChoice = "lizard";
    } else {
        computerChoice = "Spock";
    }
    alert("Computer chooses: " + computerChoice);


    var compare = function(choice1, choice2) {
        if (choice1 === choice2) {
            // return "The result is a tie!";
            newGame("It was a tie. Please choose between rock, paper, scissors, lizard, or Spock.");

        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "Rock destroys scissors. Rock wins!";
            } else if (choice2 === "paper") {
                return "Paper covers rock. Paper wins";
            } if (choice2 === "lizard") {
                return "Rock crushes lizard. Rock wins!";
            } else { // Spock
                return "Spock vaporizes rock. Spock wins!";
            }

        } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "Paper covers rock. Paper wins";
            } else if (choice2 === "scissors") {
                return "Scissors cuts paper. Scissors wins";
            } else if (choice2 === "lizard") {
                return "Lizard eats paper. Lizard wins";
            } else { // Spock
                return "Paper disproves Spock. Paper wins";
            }

        } else if (choice1 === "scissors") {
            if (choice2 === "paper") {
                return "Scissors cuts paper. Scissors wins";
            } else if (choice2 === "rock") {
                return "Rock destroys scissors. Rock wins!";
            } else if (choice2 === "lizard") {
                return "Scissors decapitates lizard. Scissors wins";
            } else { // Spock
                return "Spock smashes scissors. Spock wins";
            }

        } else if (choice1 === "lizard") {
            if (choice2 === "rock") {
                return "Rock crushes lizard. Rock wins";
            } else if (choice2 === "paper") {
                return "Lizard eats paper. Lizard wins!";
            } else if (choice2 === "scissors") {
                return "Scissors decapitates lizard. Scissors wins";
            } else { // Spock
                return "Lizard poisons Spock. Lizard wins";
            }
        } else { // Spock
            if (choice2 === "rock") {
                return "Spock crushes rock. Spock wins";
            } else if (choice2 === "paper") {
                return "Paper disproves Spock. Paper wins!";
            } else if (choice2 === "scissors") {
                return "Spock smashes scissors. Spock wins";
            } else { // lizard
                return "Lizard poisons Spock. Lizard wins";
            }
        }
    };

    var winner = compare(userChoice, computerChoice);
    alert(winner);
}

newGame();
