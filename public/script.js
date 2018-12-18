var matrix = [];
var side = 10;
var socket;

function setup() {

    socket = io();

    socket.on("matrix", function(mtx){
        matrix = mtx;
        createCanvas(matrix[0].length * side, matrix.length * side);
        console.log(matrix);
        //HETAGAYUM JNJEL
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
                    matrix[y][x].acted = false;
    
                }
                else if (matrix[y][x].index == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                    matrix[y][x].acted = false;
    
                }
                else if (matrix[y][x].index == 4) {
                    fill("#99CCFF");
                    rect(x * side, y * side, side, side);
                    matrix[y][x].acted = false;
    
                }
                else if (matrix[y][x].index == 5) {
                    fill("#000066");
                    rect(x * side, y * side, side, side);
                    matrix[y][x].acted = false;
    
                }
            }
        }
    });
    frameRate(0);
    background('#acacac');
    
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
                matrix[y][x].acted = false;

            }
            else if (matrix[y][x].index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;

            }
            else if (matrix[y][x].index == 4) {
                fill("#99CCFF");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;

            }
            else if (matrix[y][x].index == 5) {
                fill("#000066");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;

            }
        }
    }
}