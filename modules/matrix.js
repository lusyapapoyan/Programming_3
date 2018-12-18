var LivingCreature = require("./class.LivingCreature");
var Grass =require("./class.grass");
var GrassEater =require("./class.grasseater");
var Owner =require("./class.owner");
var Gishatich =require("./class.gishatich");
var Water =require("./class.water");

var matrix = [];
var n = 80;
var m = 80;
var side = 10;

for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] =  function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;  
          }
    
          console.log(getRandomInt(0,5));
        

    }

}
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = new Grass(x, y, 1);
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = new GrassEater(x, y, 2);
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = new Gishatich(x, y, 3);
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = new Water(x, y, 4);
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = new Owner(x, y, 5);
            }
        }
    }
   


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;  
      }

      console.log(getRandomInt(0,5));