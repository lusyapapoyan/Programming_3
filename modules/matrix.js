var LivingCreature = require("./class.LivingCreature");
var Grass = require("./class.grass");
var GrassEater = require("./class.grasseater");
var Owner = require("./class.owner");
var Gishatich = require("./class.gishatich");
var Water = require("./class.water");
var Weather = require("./weather");

Grass.born = 0;
Grass.dead = 0;
Grass.current = 0;

GrassEater.born = 0;
GrassEater.dead = 0;
GrassEater.current = 0;

Gishatich.born = 0;
Gishatich.dead = 0;
Gishatich.current = 0;

Owner.born= 0;
Owner.dead = 0;
Owner.current= 0;

var matrix = [];
var n = 80;
var m = 80;

for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = Math.floor((Math.random() * 6));
    }
}
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
            Grass.born++;
            Grass.current++;
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);
            GrassEater.born++;
            GrassEater.current++;
        }
        else if (matrix[y][x] == 3) {
            matrix[y][x] = new Gishatich(x, y, 3);
            Gishatich.born++;
            Gishatich.current++;
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = new Water(x, y, 4);
        }
        else if (matrix[y][x] == 5) {
            matrix[y][x] = new Owner(x, y, 5);
            Owner.born++
            Owner.current++;
        }
    }
}

module.exports = matrix;

function randomFromArr(arr) {
    return Math.floor(Math.random() * arr.length);

}
function randomInRange(num) {
    return Math.floor(Math.random() * num);
}
