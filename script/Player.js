
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

    createBoard() {
        const board = document.createElement('div');
        board.classList.add('board');

        this.gameBoard.forEach(y => {
            const hLine = document.createElement('div');
            y.forEach(x => {
                const cell = document.createElement('div');
                cell.classList.add('board-cell');
                hLine.append(cell);

            })
            board.append(hLine);
        })
        return board;
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