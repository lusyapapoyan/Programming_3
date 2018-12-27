var LivingCreature = require("./class.LivingCreature");
module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.directions = [];
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],

            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],

            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],

            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],

            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]

        ];
    }

    chooseCell(num, matrix) {
        this.getNewCoordinates();
        return super.chooseCell(num, matrix);

    }

    move(matrix) {
        var newCell = randomInRange(this.chooseCell(0, matrix));
        if (this.acted == false) {
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                
                this.acted == true;
                this.energy--;
                if (this.energy <= 0) {
                    this.die(matrix);
                }

            }

        }
        else { this.acted == false };

    }
    eat(matrix) {
        var newCell = randomInRange(this.chooseCell(2, matrix));
        if (newCell) {

            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX].dieCounter();

            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
     
            this.energy++;
            if (this.energy >= 10) {
                this.mul(matrix);
            }

        }

        else {
            this.move(matrix);
        }


    }

    mul(matrix) {
        var newCell = randomInRange(this.chooseCell(0, matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Gishatich(newX, newY, 3);
            this.energy = 8;
            Gishatich.born++;
            Gishatich.current++;
            
        }

    }

    die(matrix) {
        this.dieCounter();
        matrix[this.y][this.x] = 0;
        

    }
    dieCounter() {
        Gishatich.dead++;
        Gishatich.current--;
    }


}
function randomInRange(arr) {
    return arr[Math.floor(Math.random() * arr.length)];

}
