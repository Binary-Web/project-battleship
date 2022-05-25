

import gameBoard from './factory/gameBoard.js'

export default class Player {
    constructor(name) {
        this.name = name;
        this.ships = [];
        this.board = gameBoard();
    }

    attackCell(ai, cellNum) {
        console.log(`Enemy: ${ai}`)
        console.log(`Attack AI board ${cellNum}`);
    }
    
}

