

import gameBoard from './factory/gameBoard.js'

export default class Player {
    constructor(name) {
        this.name = name;
        this.ships = [];
        this.board = gameBoard();
    }
}