var matrix = [];
var side = 10;
var socket;

function setup() {
    socket = io();
    socket.on("matrix", function (mtx) {
        matrix = mtx;
        createCanvas(1400, 720);
        redraw();
        socket.on("redraw", function (mtx) {
            matrix = mtx;
            redraw();
        });
    // socket.on("stats", function(){
    //     inf = stats;
    // })    
    });
    frameRate(0);
    background('#acacac');
    noLoop();
}

function draw() {
    background("#acacac");
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 4) {
                fill("#99CCFF");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 5) {
                fill("#000066");
                rect(x * side, y * side, side, side);
            }
        }
    }
    textSize(32);
    fill(0, 0, 0);
    text('Statistics', 1000, 50);
    text("Born", 850, 100 );
    text("Dead", 1060, 100);
    text("Current", 1250,100);
    
}