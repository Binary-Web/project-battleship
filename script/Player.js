
import createShips from "./factory/createShips.js";
import gameBoard from './factory/gameBoard.js'

export default class Player {
    constructor(name) {
        this.name = name;
        this.ships = createShips();
        this.board = gameBoard();
        this.coordinates = []
    }

    shipSelection() {
        
        const selectionContainer = document.createElement('div');
        selectionContainer.classList.add('selection-container')
        this.ships.forEach(async (ship, index) => {
            const shipName = document.createElement('p');
            shipName.dataset.index = index;
            shipName.classList.add('ship-name');
            shipName.innerText = ship.name;
            selectionContainer.append(shipName);
        })

        selectionContainer.addEventListener('click', (e) => {
            this.getClick(e)
        })

        while(this.coordinates.length <= 5) {
            this.coordinates.push(this.selectShip)
        }

        return selectionContainer;
    }

    

    getClick(e) {
        const selectionContainer = document.querySelector('.selection-container')

        console.log(e.target.parentNode)
        const index = e.target.dataset.index
        console.log(e.target.innerText)
        if(index) {
            switch(e.target.innerText) {
                case 'Carrier':
                    this.ships[index].location = this.selectShip(index)
                    break;
                case 'Battleship':
                    this.ships[index].location = this.selectShip(index)
                    break;
                case 'Cruiser':
                    this.ships[index].location = this.selectShip(index)
                    break;
                case 'Submarine':
                    this.ships[index].location = this.selectShip(index)
                    break;
                case 'Destroyer':
                    this.ships[index].location = this.selectShip(index)
                    break;
            }
        }
        
    }

    // selectShip(index) {
    //     const cells = document.querySelectorAll('.board-cell');
    //     console.log(this.ships[index].isHorizontal)
    //     let hoverCells = []
    //     cells.forEach((cell, cellNum) => {
    //         cell.addEventListener('mouseover', () => {
    //             hoverCells = []
    //             if(this.ships[index].isHorizontal) {
    //                 for(let x = 0; x < this.ships[index].hitBoxes.length; x++) {
    //                     cells[cellNum + x].classList.add('hover-cell');
    //                     hoverCells.push(cellNum + x);
    //                 }
    //             }
    //         })

    //         cell.addEventListener('click', () => {
    //             this.ships[index].location = hoverCells;
    //         })

    //         cell.addEventListener('mouseout', () => {
    //             hoverEffectRemover(cells);
    //         })
    //     })
    //     console.log(this.ships)
    // }

    selectShip() {
        return new Promise((resolve, reject) => {
            const cells = document.querySelectorAll('.board-cell');
            let hoverCells = []
            cells.forEach((cell, cellNum) => {
                cell.addEventListener('mouseover', () => {
                    hoverCells = []
                    if(true) {
                        for(let x = 0; x < 4; x++) {
                            cells[cellNum + x].classList.add('hover-cell');
                            hoverCells.push(cellNum + x);
                        }
                    }
                })
    
                cell.addEventListener('click', () => {
                        resolve(hoverCells)
                })
    
                cell.addEventListener('mouseout', () => {
                    hoverEffectRemover(cells);
                })
            })
            console.log(this.ships)
        })
        
    }

    
}

function hoverEffectRemover(cells) {
    cells.forEach(cell => {
        cell.classList.remove('hover-cell')
    })
}