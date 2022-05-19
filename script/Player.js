
import createShips from "./factory/createShips.js";

export default class Player {
    constructor(name) {
        this.name = name;
        this.ships = createShips();
        this.board = this.createBoard();
    }



    
}