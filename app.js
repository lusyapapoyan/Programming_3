var express = require('express');
var path = require('path');
var app = express();
var io = require("socket.io")(server);

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'modules')));

// Listen for requests
var server = app.listen(app.get('port'), function () {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

var matrix = require("./modules/matrix.js");
console.log(matrix);


io.on("connection", function (socket) {
  socket.emit("matrix", messages[i]);

});
