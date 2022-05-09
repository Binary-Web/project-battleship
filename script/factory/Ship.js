export default class Ship {
    constructor(name, hitBoxes) {
        this.name = name;
        this.hitBoxes = new Array(hitBoxes).fill("o");
        this.isHorizontal = true;
    }

    hit(index) {
        this.hitBoxes[index] = "x";
    }

    switchPosition() {
        this.isHorizontal = !this.isHorizontal;
    }

    isSunk() {
        if(this.hitBoxes.includes("o")) {
            return false;
        }
    }
    getStatus() {
        return {
            Name: this.name,
            Health: this.hitBoxes
        }
    }

}

