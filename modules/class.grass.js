var LivingCreature= require("./class.LivingCreature");
module.exports = class Grass extends LivingCreature {
  

    mul(matrix) {
        this.multiply++;
        var newCell = randomInRange(this.chooseCell(0, matrix));

        if (newCell && this.multiply >= 5) {
            var newX = newCell[0];
            var newY = newCell[1];
            // matrix[newY][newX] = die();
            matrix[newY][newX] = new Grass(newX, newY, 1);
            // Grass.born++;
            // Grass.current++;
            this.multiply = 0;

        }
    }
    die(matrix){
        // this.dieCounter();
        matrix[this.y][this.x] =0;
        
    }
    // dieCounter(){
    //     Grass.dead++;
    //     Grass.current--;
    // }

}
function randomInRange(arr){
    return arr[Math.floor(Math.random() * arr.length)];

}
