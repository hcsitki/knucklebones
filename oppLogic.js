function oppChoice() {
    
    // ELIMINATE TRIPLES FIRST
    for(i=0; i<3; i++) {
        if(playerBoard[i][0] == currentRoll 
            && playerBoard[i][1] == currentRoll 
            && playerBoard[i][2] == currentRoll) {
                // if column can be played in, play and then return to doPlacementLogic();
                if(playIfPossible(i)) {
                    alert("eliminating trips");
                    return;
                }
        }
    }


    // ELIMINATE DOUBLES FIRST
    for(i=0; i<3; i++) {
        if(playerBoard[i][0] == currentRoll && playerBoard[i][1] == currentRoll
            || playerBoard[i][0] == currentRoll && playerBoard[i][2] == currentRoll
            || playerBoard[i][1] == currentRoll && playerBoard[i][2] == currentRoll) {
            if(playIfPossible(i)) {
                alert("eliminating dubs");
                return;
            }
        }             
    }

    // GET TRIPLES
    for(i=0; i<3; i++) {
        if(oppBoard[i][0] == currentRoll && oppBoard[i][1] == currentRoll && oppBoard[i][2] == null) {
            oppBoard[i][2] = currentRoll;
            checkEliminations(i);
            drawBoard();
            return;
        } else if(oppBoard[i][0] == currentRoll && oppBoard[i][1] == null && oppBoard[i][2] == currentRoll) {
            oppBoard[i][1] = currentRoll;
            checkEliminations(i);
            drawBoard();
            return;
        } else if(oppBoard[i][0] == null && oppBoard[i][1] == currentRoll && oppBoard[i][2] == currentRoll) {
            oppBoard[i][0] = currentRoll;
            checkEliminations(i);
            drawBoard();
            return;
        }
    }

    // GET DOUBLES
    for(i=0; i<3; i++) {
        if(oppBoard[i][0] == currentRoll && (oppBoard[i][1] == null || oppBoard[i][2] == null)) {
            if(playIfPossible(i)) {
                return;
            }
        }
        if(oppBoard[i][1] == currentRoll && (oppBoard[i][0] == null || oppBoard[i][2] == null)) {
            if(playIfPossible(i)) {
                return;
            }
        }
        if(oppBoard[i][2] == currentRoll && (oppBoard[i][1] == null || oppBoard[i][0] == null)) {
            if(playIfPossible(i)) {
                return;
            }
        }
    }


    // ELSE COLUMN WITH LEAST DICE IN IT
    colCount = [0,0,0]
    for(i=0; i<3; i++) {
        for(j=0; j<3; j++) {
            if(oppBoard[i][j] != null) {
                colCount[i]++;
            }
        }
    }

    if(colCount[0]<=colCount[1] && colCount[0]<=colCount[2]) {

        if(playIfPossible(0)) {
            return;
        }
    } 
    if(colCount[1]<=colCount[0] && colCount[1]<=colCount[2]) {
        if(playIfPossible(1)) {
            return;
        }
    } 
    if(colCount[2]<=colCount[1] && colCount[2]<=colCount[0]) {
        if(playIfPossible(2)) {
            return;
        }
    } 

}

function playIfPossible(i) {
    for(j=0; j<3; j++) {
        if(oppBoard[i][j] == null) {
            oppBoard[i][j] = currentRoll;
            checkEliminations(i);
            drawBoard();
            return true;
        }
   } 
   return false;
}