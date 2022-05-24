import Player from './Player.js'
import Ship from './/factory/Ship.js';
import AI from './AIPlayer.js'
document.querySelector('.inputPlayerName').addEventListener('submit', (e) => {
    e.preventDefault();
    const container = document.querySelector('.modal-bg');
    const playerName = document.querySelector('.nameText').value;
    const player = new Player(playerName);
    container.append(player.board);
    deployingShips(player);

    const ai = new AI();

    ai.createShips();
    console.log(ai.getShips())

})

function deployingShips(player) {
    let isHorizontal = false;
    const btnRorate = document.querySelector('.btn-rotate-ship')
    player.board.addEventListener('mouseover', (e) => {
        mouseoverHandle(e, player, isHorizontal)
    })
    player.board.addEventListener('mouseout', hoverEffectRemover)
    player.board.addEventListener('click', (e) => {
       placeShip(player, isHorizontal);
    })

    btnRorate.addEventListener('click', () => isHorizontal = !isHorizontal)
}

function placeShip(player, isHorizontal) {
    const counter = player.ships.length;
    
    if(checkCellIfAvaible(player).length == 0) {
        if(counter <= 4) {
            switch(counter) {
                case 0:
                    player.ships.push(new Ship('Carrier', 5, isHorizontal, loc.getLoc()))
                    break;
                case 1:
                    player.ships.push(new Ship('Battleship', 4, isHorizontal, loc.getLoc()))
                    break;
                case 2:
                    player.ships.push(new Ship('Cruiser', 3, isHorizontal, loc.getLoc()))
                    break;
                case 3:
                    player.ships.push(new Ship('Submarine', 3, isHorizontal, loc.getLoc()))
                    break;
                case 4:
                    player.ships.push(new Ship('Destroyer', 5, isHorizontal, loc.getLoc()))
                    break;    
            }
        }
    } else {
        console.log('cell is occupied by another ship')
    }
    updateBoard(player)
}

function mouseoverHandle(e, player, isHorizontal) {

    loc.clearLoc();
    const cells = document.querySelectorAll('.board-cell');
    hoverEffectRemover()
    const counter = player.ships.length;
    let length;
    switch(counter) {
        case 0:
            length = 5;
            break;
        case 1:
            length = 4;
            break;
        case 2:
            length = 3;
            break;
        case 3:
            length = 3;
            break;
        case 4:
            length = 2;
            break;    
    }

    
    let num = parseInt(e.target.dataset.cellnumber);
    let overFlowNum = 10 - length;
    let hCellNum = num % 10;
    for(let x = 0; x < length; x++) {
        
        if(isHorizontal) {
            if(hCellNum <= overFlowNum) {
                loc.currentLoc.push(num);
                cells[num++].classList.add('hover-cell');
            } else {
                console.log('madi')
            }
            
        } else {
            try {
                cells[num].classList.add('hover-cell');
                loc.currentLoc.push(num);
                num+=10;
            } catch(err) {
                hoverEffectRemover()
            }
        }
    }
}

function checkCellIfAvaible(player) {
    const allCoord = [];
    let test = [];
    player.ships.forEach(ship => {
        ship.location.forEach(loc => allCoord.push(loc))
    }) 

    loc.currentLoc.forEach(loc => {
        allCoord.forEach(x => {
            if(loc == x) {
                test.push(loc)
            }
        })
    })
    return test
}

function updateBoard(player) {
    const cells = document.querySelectorAll('.board-cell');
    player.ships.forEach(ship => {
            ship.location.forEach(cellNum => {
                cells[cellNum].classList.add('ship-cell')
            })
    })
    if(player.ships.length === 5) {
        player.ships.forEach(ship => {
            console.log(ship.location)
        })
    }
}



function hoverEffectRemover() {
    const cells = document.querySelectorAll('.board-cell');
    cells.forEach(cell => {
        cell.classList.remove('hover-cell')
    })
}

const loc ={
    currentLoc: [],

    clearLoc() {
        this.currentLoc = [];
    },

    getLoc() {
        return this.currentLoc;
    },

}

