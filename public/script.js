var matrix = [];
var side = 10;
var socket;
var inf;
var takt = 0;

function setup() {
    frameRate(0);
    background('#acacac');

    socket = io();
    socket.on("matrix", function (mtx) {
        matrix = mtx;
        createCanvas(1700, 720);
        redraw();

        socket.on("redraw", function (mtx) {
            matrix = mtx;
            redraw();
        });

        socket.on("stats", function (stats) {
            inf = stats;
        });
    });
    noLoop();
}

function draw() {
    background("#acacac");
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
                if (takt >= 10 && takt < 20) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                    socket.emit("send takt", takt);
                }
                else if (takt >= 20) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                    takt = 0;
                }
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

                if (takt >= 10 && takt < 20) {

                }
                else if(takt >= 20){

                }
            }
        }
    }
    textSize(32);
    fill(0, 0, 0);
    text('Statistics', 1200, 50);
    text("Born", 1100, 140);
    text("Dead", 1280, 140);
    text("Current", 1480, 140);

    var yText = 0;
    for (var i in inf) {
        var xText = 0;
        if (i == "Grass") {
            fill("green");
        }
        else if (i == "GrassEater") {
            fill("yellow");
        }
        else if (i == "Gishatich") {
            fill("red");
        }
        else if (i == "Owner") {
            fill("#000066");
        }
        textSize(28);
        text(i, 850, 250 + yText);
        for (var j in inf[i]) {
            text(inf[i][j], 1100 + xText, 250 + yText);
            xText += 200;
        }
        yText += 140;
    }
    takt++;
    socket.emit("takt", takt);
}