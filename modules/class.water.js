var LivingCreature= require("./class.LivingCreature");
module.exports =class Water extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
        this.directions = [];
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

    chooseCell(num) {
        var found = [];
        return super.chooseCell(num);
    }

    adden() {
        var yellow = this.chooseCell(2);
        for (var i in yellow) {
            var x = yellow[i][0];
            var y = yellow[i][1];
            matrix[y][x].energy += 5;

        }
        var red = this.chooseCell(3);
        for (var i in red) {
            var x = red[i][0];
            var y = red[i][1];
            matrix[y][x].energy += 8;


        }

    }

}