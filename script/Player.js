

import gameBoard from './factory/gameBoard.js';
import createShips from './factory/createShips.js'
import Board from './factory/Board.js';
export default class Player {
    constructor(name) {
        this.name = name;
        this.ships = createShips();
        this.board = new Board(name)
    }
}

