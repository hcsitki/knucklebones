function drawBoard(){
    
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawNames();
    // console.log("start_x= "+start_x);
    // console.log("padding= "+padding);
    // tmp = start_x+padding*2;
    // console.log("start_x+padding*2= "+ tmp);
    // console.log("col1Bounds= ");
    // console.log(col1Bounds.x1);
    // console.log("size= "+size);


    drawCells(start_x, start_y);
    drawDieSpot(start_x, start_y);
    
    drawCells(start_x, player_y);
    drawDieSpot(start_x, player_y);
    
    fillBoard();
    // doComputerRoll();

}


function drawNames(){
	this.ctx.fillStyle = "white";
	this.ctx.font = "bold 24px serif";
    ctx.fillText("Opponent", 30, start_y+size*2.5);
    ctx.fillText("Player (You)", 20, player_y+player_y/2);
}


function drawCells(x, y) {
    // Overall bounding box
    // this.ctx.strokeRect(start_x, start_y, size*3+padding*4, size*3+padding*4);

    // Bounding boxes of columns
    this.ctx.strokeStyle = 'white';
    this.ctx.strokeRect(x+padding/2, y+padding/2, size+padding, size*3+padding*3);
    this.ctx.strokeRect(x+padding*1.5 + size, y+padding/2, size+padding, size*3+padding*3);
    this.ctx.strokeRect(x+padding*2.5 + 2*size, y+padding/2, size+padding, size*3+padding*3);

    // individual die spaces
    for(i=0; i<3; i++) {
        for(j=0; j<3; j++) {
            
            this.ctx.beginPath();
            this.ctx.roundRect(x + i*size + (i+1)*padding, y + j*size + (j+1)*padding, size, size, die_r);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
}

function fillBoard(){

    for(i=0; i<3; i++) {

        y1 = player_y + i*size + (i+1)*padding; // Player y
        y2 = start_y + i*size + (i+1)*padding;  // Opp y

        for(j=0; j<3; j++){
            rollToStroke(playerBoard[j][i], start_x+j*size+(j+1)*padding, y1);
            rollToStroke(oppBoard[j][i], start_x+j*size+(j+1)*padding, y2);
        }
    }

}

function drawDieSpot(x, y){
    this.ctx.beginPath();
    this.ctx.roundRect(50, y+size, size, size, die_r);
    this.ctx.stroke();
    this.ctx.closePath();
}

// Take the random roll and draw the die it corresponds to
function rollToStroke(n, x, y) {

    resetDie(x,y);

    switch(n) {
        case 1:
            one(x, y);
            break;
        case 2:
            two(x, y);
            break;
        case 3:
            three(x, y);
            break;
        case 4:
            four(x, y);
            break;
        case 5:
            five(x, y);
            break;
        case 6:
            six(x, y);
            break;
    }
}




// COMPUTER roll
function doComputerRoll(){
    x = start_x - start_x/2;
    y = start_y + size;

    currentRoll = rollDice();
    rollToStroke(currentRoll, x, y);
}

// HUMAN player roll
function doRoll(){
    x = 50;
    y = player_y + size;

    document.getElementById('roll').disabled = true;
    document.getElementById('roll').innerHTML = "Choose column to play in...";
    
    currentRoll = rollDice();
    rollToStroke(currentRoll, x, y);
}

function rollDice(){
    return 1+Math.floor(Math.random() *6);
}



