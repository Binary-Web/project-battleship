import deployShips from "./factory/ShipDeploy.js";

export default class Player {
    constructor(name) {
        this.name = name;
        this.ships = deployShips();
        this.gameBoard = [["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
                    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
                    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
                    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
                    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
                    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
                    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
                    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
                    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
                    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"]]
        
    }

    placeShip() {
        // places ships to the board
    }

    attackEnemy(coord) {
        //attacks enemy by clicking enemy's board
    }

    getHit(myCoord) {
        //gets attack from enemy
    }

}