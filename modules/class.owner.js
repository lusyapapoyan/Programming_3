var LivingCreature= require("./class.LivingCreature");
module.exports =class Owner extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.directions = [];
        this.acted = false;
        this.keracKarmirQanak = 0;
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

    shoot(matrix) {
        var pred = this.chooseCell(3, matrix);
        for (var i in pred) {
            this.keracKarmirQanak++;
            var x = pred[i][0];
            var y = pred[i][1];

            if (this.keracKarmirQanak >= 10) {
                this.die(matrix);

            }

        }


    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
    }

}
function randomInRange(arr){
    return arr[Math.floor(Math.random() * arr.length)];

}