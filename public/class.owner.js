
class Owner extends LivingCreature {
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
    chooseCell(num) {
        this.getNewCoordinates();
        return super.chooseCell(num);
    }

    shoot() {
        var pred = this.chooseCell(3);
        for (var i in pred) {
            this.keracKarmirQanak++;
            var x = pred[i][0];
            var y = pred[i][1];
            matrix[y][x].die();

            if (this.keracKarmirQanak >= 10) {
                this.die();

            }

        }


    }
    die() {
        matrix[this.y][this.x] = 0;
    }

}
