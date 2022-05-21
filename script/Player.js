
import createShips from "./factory/createShips.js";
import gameBoard from './factory/gameBoard.js'

export default class Player {
    constructor(name) {
        this.name = name;
        this.ships = createShips();
        this.board = gameBoard();
        this.selectedShip = "";
        this.hoverCells = []
    }

    shipSelection() {
        const selectionContainer = document.createElement('div'); 
        this.ships.forEach((ship, index) => {
            const shipName = document.createElement('p');
            shipName.classList.add('ship-name');
            shipName.innerText = ship.name;
            shipName.dataset.indexNum = index;
            selectionContainer.append(shipName);
        })

        const ships = document.querySelectorAll('.ship-name');

        ships[0].addEventListener('click', (e) => {
            console.log(e.target.dataset.indexNum);
        })

        return selectionContainer;
    }

    selectShip(shipName, index) {
        this.selectedShip = shipName.target.innerText;
        this.selectedShip = this.ships[index];
        const cells = document.querySelectorAll('.board-cell');

        cells.forEach((cell, cellNum) => {
            cell.addEventListener('mouseover', () => {
                this.hoverCells = []
                if(this.selectedShip.isHorizontal) {
                    for(let x = 0; x < this.selectedShip.hitBoxes.length; x++) {
                        cells[cellNum + x].classList.add('hover-cell');
                        this.hoverCells.push(cellNum + x);
                    }
                }
            })

            cell.addEventListener('click', () => {
                this.ships[index].location = this.hoverCells;
                
                console.log(this.ships)
            })

            cell.addEventListener('mouseout', () => {
                hoverEffectRemover(cells);
            })
        })
    }
}

function hoverEffectRemover(cells) {
    cells.forEach(cell => {
        cell.classList.remove('hover-cell')
    })
}