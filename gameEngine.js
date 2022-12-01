startGame();

move_text = document.getElementById('opp_moves');

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

function switchTurn(){
    currentRoll = -1;
    if(activePlayer == 0) {
        document.getElementById('roll').innerHTML = "Opponents turn...";
        activePlayer = 1;
        doOpponentTurn();
    } else {
        document.getElementById('roll').innerHTML = "Roll dice";
        document.getElementById('roll').disabled = false;
        activePlayer = 0;
    }
}

function doOpponentTurn() {
    doComputerRoll();

    move_text.innerHTML = move_text.innerHTML
        +"<br>Opponent rolled a "+currentRoll;
    
    doPlacementLogic();
    switchTurn();

}

function doPlacementLogic(){

    // Place die in first available slot
    for(i = 0; i<3; i++){
        for(j=0; j<3; j++) {
            if(checkBoardFull()){
                alert("full");
                checkWin();
            } else {
                if(oppBoard[i][j]==null) {
                    oppBoard[i][j] = currentRoll;
                    drawBoard();
                    return;
                }
            }
        }
    }
    
    

}

function checkBoardFull() {
    var board;
    if(activePlayer == 0) {
        board = playerBoard;
        // alert("player");
    } else {
        // alert("opp");
        board = oppBoard;
    }

    for(i=0; i<3; i++) {
        for(j=0; j<3; j++) {
            if(board[i][j] == null) {
                return false;
            }
        }
    }

    alert("full");
    return true;


}


function calcPoints(){

    playerScore = 0;
    oppScore = 0;

    for(i=0; i<3; i++){
        if (playerBoard[i][0] == playerBoard[i][1] && playerBoard[i][0] == playerBoard[i][2]){
            playerScore += playerBoard[i][0] *9;
        } else if(playerBoard[i][0] == playerBoard[i][1]){
            playerScore += playerBoard[i][0] * 4 + playerBoard[i][2];
        } else if(playerBoard[i][1] == playerBoard[i][2]) {
            playerScore += playerBoard[i][1] * 4 + playerBoard[i][0];
        } else if (playerBoard[i][0] == playerBoard[i][2]){
            playerScore += playerBoard[i][0] * 4 + playerBoard[i][1];
        } else {
            for(j=0; j<3; j++){
                playerScore += playerBoard[i][j];
            }
        }
    }

    console.log(playerScore);
    console.log(oppScore);
    return [playerScore, oppScore];
}

// TODO: integrate points
function checkWin(){
    scores = calcPoints();
    var playerScore = scores[0];
    var oppScore = scores[1];

    move_text.innerHTML = "Player: "+playerScore+"<br>Opponent: "+oppScore;
}