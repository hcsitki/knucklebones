canvas.addEventListener('click', (e) => {


    var pos = {
        x: getMousePos(canvas, e).x,
        y: getMousePos(canvas, e).y
    };
    
    if(activePlayer == 0 && currentRoll != -1) {
        //Check if column is clicked
        col_index = checkColumn(pos) - 1;
    
        if(col_index != -2) {
            if(checkColFull(col_index)) {
                alert("column is full");
            } else {
                addToColumn(col_index);
            }
        }

    }

});

function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function checkColumn(pos) {
    // console.log(pos.x+" "+pos.y);
    // console.log("x1: "+col2Bounds.x1+" x2: "+col2Bounds.x2+" y1: "+col1Bounds.y1+" y2: "+col1Bounds.y2);
    if(pos.x >= col1Bounds.x1 
        && pos.x <= col1Bounds.x2 
        && pos.y >= col1Bounds.y1 
        && pos.y <= col1Bounds.y2) {
            // console.log(1);
            return 1;
        } else if(pos.x >= col2Bounds.x1 
            && pos.x <= col2Bounds.x2 
            && pos.y >= col2Bounds.y1 
            && pos.y <= col2Bounds.y2) {
            // console.log(2);
            return 2;
        } else if(pos.x >= col3Bounds.x1 
            && pos.x <= col3Bounds.x2 
            && pos.y >= col3Bounds.y1 
            && pos.y <= col3Bounds.y2) {
            // console.log(3);
            return 3;
    } else {
        alert("Choose one of your columns to place your die in");
        return -1;
    }
}


function checkColFull(col) {
    // console.log("Board: "+playerBoard[col][0]+" "+playerBoard[col][1]+" "+playerBoard[col][2]);
    if(playerBoard[col][0] != null
        && playerBoard[col][1] != null
        && playerBoard[col][2] != null) {
            return true;
    }

    return false;
}


function addToColumn(col) {
    for(i=0; i<3; i++) {
        if(playerBoard[col][i]==null) {
            playerBoard[col][i]=currentRoll;
            drawBoard();
            if(checkBoardFull()) {
                checkWin();
            } else {
                switchTurn();
        
            }
            break;
        }
    }

    
    // TODO: call column logic checks
}
