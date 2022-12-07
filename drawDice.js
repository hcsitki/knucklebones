function one(x, y) {
    ctx.beginPath();
    ctx.arc(x + size/2, y + size/2, r, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
}

function two(x, y) {
    ctx.beginPath();
    ctx.arc(x + size*.25, y + size*.25, r, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(x + size*.75, y + size*.75, r, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function three(x, y) {
    one(x, y);
    two(x, y);
}

function four (x, y) {
    two(x,y);

    ctx.beginPath();
    ctx.arc(x + size*.75, y + size*.25, r, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(x + size*.25, y + size*.75, r, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

}

function five(x,y) {
    one(x, y);
    four(x,y);
}

function six(x,y) {

    // Top left
    ctx.beginPath();
    ctx.arc(x + size*.25, y + size*.25, r, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Top right
    ctx.beginPath();
    ctx.arc(x + size*.75, y + size*.25, r, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Middle left
    ctx.beginPath();
    ctx.arc(x + size*.25, y + size*.5, r, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Middle right
    ctx.beginPath();
    ctx.arc(x + size*.75, y + size*.5, r, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Bottom left
    ctx.beginPath();
    ctx.arc(x + size*.25, y + size*.75, r, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Bottom right
    ctx.beginPath();
    ctx.arc(x + size*.75, y + size*.75, r, 0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function resetDie(x, y) {
    ctx.clearRect(x, y, size, size);
    // ctx.strokeRect(x, y, size, size);
    this.ctx.beginPath();
    this.ctx.roundRect(x, y, size, size, die_r);
    this.ctx.stroke();
    this.ctx.closePath();

}