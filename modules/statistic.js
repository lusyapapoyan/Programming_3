var LivingCreature = require("./class.LivingCreature");
var Grass = require("./class.grass");
var GrassEater = require("./class.grasseater");
var Owner = require("./class.owner");
var Gishatich = require("./class.gishatich");
var fs = require("fs");


var inf = {
}
var myJSON = JSON.stringify(inf);

function main(){
    fs.writeFileSync("./modules/statistics.json", myJSON);
 }
 main();

