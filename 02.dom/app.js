///////////////////////////////////////
// DOM MANIPULATION
/*
 GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// set inital scores to 0 - 0
var scores, roundScore, activePlayer;

// state variable to disable buttons once game is won
var gamePlaying;

// initialize the game 
init();

/**
 * Implements the ROLL DICE functionality 
 */
// do something when the dice roll button is clicked
document.querySelector(".btn-roll").addEventListener("click", function() {
    // continue the game until a winner is declared
    if (gamePlaying) {
        // select random no. b/w 1 to 6
        var dice = Math.floor(Math.random() * 6) + 1;

        // display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = "block"; 
        diceDOM.src = "dice-" + dice + ".png";

        // update the round score but only if the no. was NOT a 1
        if (dice !== 1) {
            roundScore += dice;
            // now update current player score 
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            // switch to the next player
            nextPlayer();
        }
    } 
});


/**
 * Implements the HOLD functionality 
 */
document.querySelector(".btn-hold").addEventListener("click", function() {
    // continue the game until a winner is declared
    if (gamePlaying) {
        // add current score to global after a user holds the game 
        scores[activePlayer] += roundScore;

        // update the ui
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        // check if player has won 
        if (scores[activePlayer] >= 20) {
            // declare winner 
            document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
            document.querySelector(".dice").style.display = "none";
        
            // highlight the winner
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        
            // winner is declared, now stop the game
            gamePlaying = false;
        } else {
            // continue the game and switch to next player
            nextPlayer();
        }
    }
});

/**
 * Create a new game
 */
// NOTE: done write init() as we are passing a function not calling it 
document.querySelector(".btn-new").addEventListener("click", init);

/**
 * This function resets the game
 */
function init() {
    scores = [0, 0];
    roundScore = 0; 
    activePlayer = 0;
    gamePlaying = true;

    // initially the dice must be invisible 
    document.querySelector(".dice").style.display = "none"; 
    
    // set all the values to 0 
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    
    // remove the winner text and class
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    // remove active class
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    // player 1 starts the game, add active class to player 1
    document.querySelector(".player-0-panel").classList.add("active");
}


/**
 * This function keeps track of which player's turn is it
 */
function nextPlayer() {
    // swtich player if no. is 1 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';

    // toggle the active class 
    // - remove/add for player-0
    // - remove/add for player-1
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // once the active class changes to other player then make dice invisible
    document.querySelector(".dice").style.display = "none";     
}



// NOTES: 
// ** Read some content from a webpage and display it 
// var x = document.querySelector("#score-0").textContent;
// console.log(`Value of x is ${x}`);

// ** If we want to put some HTML instead of plain text we use innerHtml instead of textContent
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// ** Remove and add active css class to another player  
// document.querySelector(".player-0-panel").classList.remove("active");
// document.querySelector(".player-1-panel").classList.add("active");