// global variables for game
var player_lives = 0;
var computer_lives = 0;
var choices = ['Rock', 'Paper', 'Scissors'];
var images = ['images/rock.png', 'images/paper.png', 'images/scissors.png'];
var computers_choice;
var players_choice = "";
var gameImg = document.getElementById('gameImg');
var message_area = document.getElementById('game_area');
var playerScore = document.getElementById('playerScore');
var computerScore = document.getElementById('computerScore');
var clearArea = false;

document.getElementById('playGame').addEventListener("click", runGame);

function addSelectCss(obj) {
    var parnode = obj.parentNode;
    var nodes = parnode.children;
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        console.info(node);
        let classAtr = node.getAttribute("class");
        let newClass = classAtr.replace("selected","");
        node.setAttribute("class",newClass);
    }
    obj.classList.add("selected");
    players_choice = obj.innerText;
}

// game logic
function runGame() {
    if (clearArea) {
        message_area.innerHTML = '';
    }
    message_area.innerHTML = '';
    if(players_choice == ''){
        message_area.innerHTML = 'Choose your weapon!';
        return;
    }

    clearArea = false;
    var index = Math.floor(Math.random() * images.length);
    var imgUrl = images[index];
    gameImg.src = imgUrl;


    // initial messaging
    // message_area.innerHTML+= "*********** <br />";
    // message_area.innerHTML+= "Computer lives: " + computer_lives + "<br />";
    // message_area.innerHTML+= "Player lives: " + player_lives + "<br />";
    // message_area.innerHTML+= "Choose your weapon! <br />";
    // message_area.innerHTML+= "*********** <br />";

    // setting game choices
    // var players_choices = document.getElementById('gameOption');
    // players_choice = players_choices.options[players_choices.selectedIndex].value;
    computers_choice = choices[index];

    // displaying choices
    // message_area.innerHTML+= "*********** <br />";
    // message_area.innerHTML+= 'Computer chose: ' + computers_choice + ' <br />';
    // message_area.innerHTML+= 'Player chose: ' + players_choice + ' <br />';
    // message_area.innerHTML+= "*********** <br />";

    // conditionals for actual game logic
    if (players_choice == computers_choice) {
        player_lives++;
        computer_lives++;
        playerScore.innerHTML = player_lives;
        computerScore.innerHTML = computer_lives;
        message_area.innerHTML+= 'Tie! No one wins, play again! <br />';
    } else if (players_choice == 'Rock') {
        checkComputerWins('Paper', 'covers', 'smashes');
    } else if (players_choice == 'Paper') {
        checkComputerWins('Scissors', 'cuts', 'covers');
    } else if (players_choice == 'Scissors') {
        checkComputerWins('Rock', 'smashes', 'cuts');
    } else {
        message_area.innerHTML+= "Well that's not a valid choice. <br />";
        clearArea = true;
    }

    // restart game loop
    // checkStatus();
}

// checks whether computer wins against player choice
function checkComputerWins(validateChoice, winMessage, loseMessage) {
    if (computers_choice == validateChoice) {
        // message_area.innerHTML += '<span class="c-red">You lose! </span>' + computers_choice + ' ' + winMessage + ' ' + players_choice + '<br />';
        message_area.innerHTML += '<span class="c-red">You lose! </span>';
        computer_lives++;
        computerScore.innerHTML = computer_lives;
        // showWinloseMessage("lost",'c-red');
    } else {
        // message_area.innerHTML += '<span class="c-green">You win! </span>' + players_choice + ' ' + loseMessage + ' ' + computers_choice + '<br />';
        message_area.innerHTML += '<span class="c-green">You win! </span>';
        player_lives++;
        playerScore.innerHTML = player_lives;
        // showWinloseMessage("won",'c-green');
    }
}

//  check status of game
function checkStatus() {
    if (player_lives == 0) {
        showWinloseMessage("lost",'c-red');
    } else if (computer_lives == 0) {
        showWinloseMessage("won",'c-green');
    } else {
        // message_area.innerHTML+= "Select another choice! <br />";
        // message_area.innerHTML+= "*********** <br /><br />";
    }
}


// messaging for winning or losing
function showWinloseMessage(status,css) {

    // message_area.innerHTML+= "*********** <br />";
    // message_area.innerHTML+= "Game Over. <br />";
    // message_area.innerHTML+= "<span class='"+css+"'>You " + status + "</span>! Would you like to play again? <br />";
    message_area.innerHTML+= "<span class='"+css+"'>You " + status;
    // message_area.innerHTML+= "*********** <br />";
    clearArea = true;
}



