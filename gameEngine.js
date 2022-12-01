startGame();


function startGame() {
    drawBoard();
    startingPlayer = pickFirst();
    startingPlayer = 0;

    // If starting player is the HUMAN player
    if(startingPlayer == 0){
        document.getElementById('roll').disabled = false;
        activePlayer = 0;
    } else {
        document.getElementById('roll').innerHTML = "Opponents turn...";
        activePlayer = 1;
    }
}

// 0 : human player
// 1 : computer
function pickFirst(){
    return Math.floor(Math.random() * 2);
}

function switchTurn(activePlayer){
    if(activePlayer == 0) {
        document.getElementById('roll').innerHTML = "Opponents turn...";
        activePlayer = 1;
        doOpponentTurn();
    } else {
        activePlayer = 0;
    }
}

function doOpponentTurn() {
    alert("opponents turn");
    doComputerRoll();
}

