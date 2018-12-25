var express = require('express');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("./public"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

var matrix = require("./modules/matrix.js");
var Grass= require("./modules/class.grass");
var GrassEater = require("./modules/class.grasseater");
var Owner = require("./modules/class.owner");
var Gishatich = require("./modules/class.gishatich");

io.on("connection", function (socket) {
    socket.emit("matrix", matrix);

    setInterval(function () {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x].index == 1) {
                    matrix[y][x].mul(matrix);
                }
                else if (matrix[y][x].index == 2) {
                    matrix[y][x].eat(matrix);
                }
                else if (matrix[y][x].index == 3) {
                    matrix[y][x].eat(matrix);
                }
                else if (matrix[y][x].index == 4) {
                    matrix[y][x].adden(matrix);
                }
                else if (matrix[y][x].index == 5) {
                    matrix[y][x].shoot(matrix);

                }
            }
        }
        socket.emit("redraw", matrix);
    }, time);

    setInterval(function () {
        inf = {
            "Grass": {
                "born": Grass.born,
                "dead": Grass.dead,
                "current": Grass.current
            },
            "GrassEater": {
                "born": GrassEater.born,
                "dead": GrassEater.dead,
                "current": GrassEater.current
            },
            "Gishatich": {
                "born": Gishatich.born,
                "dead": Gishatich.dead,
                "current": Gishatich.current
            },
            "Owner": {
                "born": Owner.born,
                "dead": Owner.dead,
                "current": Owner.current
            }
        }

        var MyJSON = JSON.stringify(inf);
        var MyJSON = JSON.stringify(inf);
        fs.writeFileSync("./statistics.json", MyJSON);
        socket.emit("stats", inf);
    }, 1000);
});

var inf = {
    "Grass": {
        "born": 0,
        "dead": 0,
        "current": 0
    },
    "GrassEater": {
        "born": 0,
        "dead": 0,
        "current": 0
    },
    "Gishatich": {
        "born": 0,
        "dead": 0,
        "current": 0
    },
    "Owner": {
        "born": 0,
        "dead": 0,
        "current": 0
    }
}

var frameRate = 1;
var time = 1000 / frameRate;





