var LivingCreature= require("./class.LivingCreature");
module.exports = class Grass extends LivingCreature {
  

    mul(matrix) {
        this.multiply++;
        var newCell = randomInRange(this.chooseCell(0, matrix));

        if (newCell && this.multiply >= 5) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;

        }
    }

}
function randomInRange(num){
    return Math.floor(Math.random() * num);

}
