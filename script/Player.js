
import createShips from "./factory/createShips.js";

export default class Player {
    constructor(name) {
        this.name = name;
        this.ships = createShips();
        this.board = this.createBoard();
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

    deployShips() {
        let x;
        for(x = 0; x <=4; x++) {
            console.log(x)
            this.ships[x].location = this.placeShip(this.ships[x]);
            if(this.ships.placed) {
                continue;
            }
            break;
        }
        // this.ships.forEach(ship => {
        //     ship.location = this.placeShip(ship)
        // })
    }

    placeShip(ship) {
        console.log(ship)
        const cells = document.querySelectorAll('.board-cell');
        const board = document.querySelector('.board');
        cells.forEach((element, index) => {
            
                element.addEventListener('mouseover', (e) => {
                        hoverEffect(ship.hitBoxes.length, cells, index, e.target.dataset.counter, ship.isHorizontal);
                })
                
                element.addEventListener('click', (e) => {
                    e.preventDefault()
                    if(status.getStatus()) {
                        console.log(shipLocation.getCoordinates())
                    }
                })


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

function hoverEffect(hitBoxesLength, cells, indexNum, datasetCounter, isHorizontal) {
    let cellCount = indexNum;
    shipLocation.clearCoordinates();
    //if the ship is horizontal
    if(isHorizontal) {
        for(let x = 1; x <= hitBoxesLength; x++) {
            shipLocation.shipCoordinates.push(cellCount);
            cells[cellCount].classList.add('cellhover');

            //this condition to prevent the ship from overlapping  the board
            if(10-hitBoxesLength >= datasetCounter) {
                
                status.enableStatus();
                cellCount++;
            } else {
                status.disableStatus();
                hoverRemover()
            }
        }

    //if the ship is vertical
    } else {
        for(let x = 0; x <= hitBoxesLength; x++) {
            //TRY IF THE SHIP IS NOT OVERLAPPING
            try {
                shipLocation.shipCoordinates.push(cellCount);
                status.enableStatus();
                cells[cellCount].classList.add('cellhover');
                cellCount = cellCount + 10;
            //CATCH IF THE SHIP OVERLAPPS
            } catch(err) {
                status.disableStatus();
                hoverRemover();
            }

        }
    }
}


const status = {
    clickStatus: true,

    disableStatus() {
        this.clickStatus = false;
    },
    enableStatus() {
        this.clickStatus = true;
    },

    getStatus() {
        return this.clickStatus;
    } 
}

const shipLocation = {
    shipCoordinates: [],

    clearCoordinates() {
        this.shipCoordinates = [];
    },

    getCoordinates() {
        return this.shipCoordinates;
    }
}