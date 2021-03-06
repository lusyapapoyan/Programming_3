var LivingCreature = require("./class.LivingCreature");
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.directions = [];
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]


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
        var newCell = randomInRange(this.chooseCell(1, matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX].die();
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            this.energy++;

            if (this.energy == 9) {
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
            matrix[newY][newX] = new GrassEater(newX, newY, 2); 
            this.energy = 10;
            GrassEater.born++;
            GrassEater.current++;
        }

    }
    die(matrix) {
        this.dieCounter();
        matrix[this.y][this.x] = 0;
    }
    dieCounter() {
        GrassEater.dead++;
        GrassEater.current--;
    }

}
function randomInRange(arr) {
    return arr[Math.floor(Math.random() * arr.length)];

}
