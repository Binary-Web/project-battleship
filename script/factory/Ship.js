export default class Ship {
    constructor(name, hitBoxes, isHorizontal, loc) {
        this.name = name;
        this.hitBoxes = new Array(hitBoxes).fill("o");
        this.location = loc;
        this.isHorizontal = isHorizontal;
    }

    hit(index) {
        this.hitBoxes[index] = "x";
        this.isSunk();
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
            Health: this.hitBoxes,
            Position: this.isHorizontal ? "Horizontal" : "Vertical",
            Location: this.location
        }
    }

    placeShip(loc) {
        this.location = loc;
    }

}

