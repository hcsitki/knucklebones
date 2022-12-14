startGame();

function hideTut() {
	document.getElementById("tutorial").style.display = "none";
	document.getElementById("page").style.display = "grid";
}

function restart(){
	document.getElementById( 'reset' ).style.display = "none";
	document.getElementById( 'roll' ).style.display = "block";
	for (col=0; col<3; col++){
		for(i=0; i<3; i++){
			oppBoard[col][i] = null;
			playerBoard[col][i] = null;
		}
	}
	move_text.innerHTML = "";
	startGame();
}

function startGame() {
    move_text = document.getElementById('opp_moves');
    drawBoard();
    startingPlayer = pickFirst();

    // If starting player is the HUMAN player
    if(startingPlayer == 0){
        document.getElementById('roll').disabled = false;
        activePlayer = 0;
    } else {
        document.getElementById('roll').innerHTML = "Opponents turn...";
        activePlayer = 1;
        doOpponentTurn();
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

    move_text.innerHTML = move_text.innerHTML="Opponent rolled a "+currentRoll;
    
    doPlacementLogic();
    if(checkBoardFull()) {
        checkWin();
    } else {
        switchTurn();

    }

}

function doPlacementLogic(){

    // Place die in first available slot
    for(i = 0; i<3; i++){
        for(j=0; j<3; j++) {
            if(checkBoardFull()){
                checkWin();
            } else {
                oppChoice();
            }
        }
    }
    
    

}

function checkBoardFull() {
    var board;
    if(activePlayer == 0) {
        board = playerBoard;
    } else {
        board = oppBoard;
    }

    for(i=0; i<3; i++) {
        for(j=0; j<3; j++) {
            if(board[i][j] == null) {
                return false;
            }
        }
    }

    return true;


}


function calcPoints(){

    playerScore = 0;
    oppScore = 0;

    for(i=0; i<3; i++){
        if (oppBoard[i][0] == oppBoard[i][1] && oppBoard[i][0] == oppBoard[i][2]){
            oppScore += oppBoard[i][0] *9;
        } else if(oppBoard[i][0] == oppBoard[i][1]){
            oppScore += oppBoard[i][0] * 4 + oppBoard[i][2];
        } else if(oppBoard[i][1] == oppBoard[i][2]) {
            oppScore += oppBoard[i][1] * 4 + oppBoard[i][0];
        } else if (oppBoard[i][0] == oppBoard[i][2]){
            oppScore += oppBoard[i][0] * 4 + oppBoard[i][1];
        } else {
            for(j=0; j<3; j++){
                oppScore += oppBoard[i][j];
            }
        }
    }

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

function checkWin(){
    document.getElementById('roll').innerHTML = "Roll dice";
	document.getElementById( 'roll' ).style.display = "none";
	document.getElementById( 'reset' ).style.display = "block";
    scores = calcPoints();
    var playerScore = scores[0];
    var oppScore = scores[1];

    move_text.innerHTML = "Player: "+playerScore+"<br>Opponent: "+oppScore;
    if(playerScore>oppScore) {
        move_text.innerHTML = move_text.innerHTML+"<br>You win!";
    } else {
        move_text.innerHTML = move_text.innerHTML+"<br>You lose!";
    }
}

function checkEliminations(col) {
    done = false;
    if(activePlayer == 0) {
        for(i=0; i<3; i++){
            if(oppBoard[col][i] == currentRoll) {
				if(!done){
					move_text.innerHTML = move_text.innerHTML
						+"<br>Opponent's "+currentRoll+"(s) eliminated from column "+(col+1);
					done = true;
				}
                oppBoard[col][i] = null;
            }
        }
    } else {
        for(i=0; i<3; i++){
            if(playerBoard[col][i] == currentRoll) {
				if(!done){
					move_text.innerHTML = move_text.innerHTML
						+"<br>Opponent eliminated your "+currentRoll+"(s) from column "+(col+1);
					done = true;
				}
                playerBoard[col][i] = null;
            }
        }
    }

}