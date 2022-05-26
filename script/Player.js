

import gameBoard from './factory/gameBoard.js'
import Board from './factory/Board.js'
export default class Player {
    constructor(name) {
        this.name = name;
        this.ships = [];
        this.board = new Board(name)
    }

    attackCell(ai, cellNum) {
        console.log(`Enemy: ${ai}`)
        console.log(`Attack AI board ${cellNum}`);
    }
    
}

