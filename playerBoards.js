var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = canvas.width*1.4;

var size = canvas.height/10;


var start_x = canvas.width/2 - size*1.5;
var start_y = 20;
var player_y = start_y*2 + size*4.5;

var padding = 30;
var r = size/15;
var die_r = size/4;

var currentRoll = -1;
var activePlayer = -1;



var playerBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
var oppBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


var col1Bounds = {
    x1: start_x + size/2 + padding,
    y1: player_y+ size/2 + padding, 
    x2: start_x+size/2+padding+ size+padding,
    y2: player_y+size/2+padding+ size*3 + padding*3
}

var col2Bounds = {
    x1: start_x + size*1.5 + padding*2,
    y1: player_y+ size/2 + padding,
    x2: start_x + size*1.5 + padding*2+ size+padding,
    y2: player_y+size/2+padding+ size*3 + padding*3
}

var col3Bounds = {
    x1: start_x + size*2.5 + padding*3,
    y1: player_y+ size/2 + padding,
    x2: start_x + size*2.5 + padding*3+ size+padding,
    y2: player_y+size/2+padding+ size*3 + padding*3
}