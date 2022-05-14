
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
                const firstCell = index;
                let cellCount = index;
                
                //if the ship is horizontal
                if(isHorizontal) {
                    

                    for(let x = 1; x <= 3; x++) {
                        let tempNum = cellCount % 10;
                        console.log(cellCount)
                        cells[cellCount].classList.add('cellhover');

                        //this condition to prevent the ship from overlapping  the board
                        if(10-3 >= e.target.dataset.counter) {
                            cellCount++;
                        } else {
                            hoverRemover()
                        }
                    }

                //if the ship is vertical
                } else {

                    for(let x = 0; x <= 4; x++) {
                        //TRY IF THE SHIP IS NOT OVERLAPPING
                        try {
                            cells[cellCount].classList.add('cellhover');
                            cellCount = cellCount + 10;
                        //CATCH IF THE SHIP OVERLAPPS
                        } catch(err) {
                            hoverRemover()
                        }

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
