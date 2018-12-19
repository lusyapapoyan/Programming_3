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
//console.log(matrix);

io.on("connection", function (socket) {
  socket.emit("matrix", matrix);

  socket.on("set false", function (arr) {
    matrix[arr[0]][arr[1]].acted=false;
  
  });
  setInterval(function(){
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

});


var frameRate = 1;
var time = 1000 / frameRate;

socket.on(){

}


