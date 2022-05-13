
import deployShips from "./factory/ShipDeploy.js";

const ship = {
    name: "test",
    hitBoxes: 4,
}
export default class Player {
    constructor(name) {
        this.name = name;
        this.ships = deployShips();
        
    }

    createBoard() {
        const board = document.createElement('div');
        const button = document.createElement('button');
        button.classList.add('btn-rotate');
        board.classList.add('board');

        for(let x = 0; x <= 9; x++) {
            const hLine = document.createElement('div');
            hLine.classList.add('horizontal-line');
            hLine.dataset.x = x;
            for(let y = 0; y <= 9; y++) {
                const cell = document.createElement('div');
                cell.classList.add('board-cell');
                cell.dataset.counter = y; 
                hLine.append(cell);
            }

            board.append(hLine)

        }
        
        return board;
    }

    placeShip() {
        let isHorizontal = true;
        const cells = document.querySelectorAll('.board-cell');
        const board = document.querySelector('.board')        
        cells.forEach((element, index) => {
            
            element.addEventListener('mouseover', (e) => {
                let cellCount = index;

                //if the ship is horizontal
                if(isHorizontal) {
                    for(let x = 1; x <= 3; x++) {
                        let num = 10 - 3;
                        let tempNum = cellCount;
                        if(cells[cellCount].dataset.counter <= 9) {
                            console.log(cells[cellCount].dataset.counter)
                            console.log(cells[cellCount])
                            cells[cellCount].classList.add('cellhover');
                        } else {
                            hoverRemover();
                        }
                        
                        cellCount++;
                    }

                //if the ship is vertical
                } else {
                    for(let x = 0; x <= 5; x++) {
                        cells[cellCount].classList.add('cellhover');
                        cellCount = cellCount + 10;

                    }
                }
            });
        });

        board.addEventListener('mouseout', () => {
            hoverRemover();
        })
    }

    attackEnemy(coord) {
        //attacks enemy by clicking enemy's board
    }

    getHit(myCoord) {
        //gets attack from enemy
    }

}

function hoverRemover() {
    const cells = document.querySelectorAll('.board-cell');
    cells.forEach(element => {
        element.classList.remove('cellhover')
    })
}
