import Player from './Player.js'
import Ship from './/factory/Ship.js';
import AI from './AIPlayer.js';
import Game from './factory/Game.js'
import Board from './factory/Board.js'
import createShips from './factory/createShips.js'


// const ai = new AI();
// document.querySelector('.inputPlayerName').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const container = document.querySelector('.modal-bg');
//     const playerName = document.querySelector('.nameText').value;
//     const player = new Player(playerName);
//     const playerBoard = player.board.createBoard();
//     container.append(playerBoard);
//     deployingShips(player, playerBoard);


//     ai.createShips();
//     ai.getShips()
//     console.log(ai.board.boardStatus)

// })

// function deployingShips(player, playerBoard) {
//     let isHorizontal = false;
//     const btnRorate = document.querySelector('.btn-rotate-ship')
//     playerBoard.addEventListener('mouseover', (e) => {
//         mouseoverHandle(e, player, isHorizontal)
//     })
//     playerBoard.addEventListener('mouseout', hoverEffectRemover)
//     playerBoard.addEventListener('click', (e) => {
//        placeShip(player, isHorizontal);
//     })

//     btnRorate.addEventListener('click', () => isHorizontal = !isHorizontal)
// }

// function placeShip(player, isHorizontal) {
//     const counter = player.ships.length;
    
//     if(checkCellIfAvaible(player).length == 0) {
//         if(counter <= 4) {
//             switch(counter) {
//                 case 0:
//                     player.ships.push(new Ship('Carrier', 5, isHorizontal, loc.getLoc()))
//                     break;
//                 case 1:
//                     player.ships.push(new Ship('Battleship', 4, isHorizontal, loc.getLoc()))
//                     break;
//                 case 2:
//                     player.ships.push(new Ship('Cruiser', 3, isHorizontal, loc.getLoc()))
//                     break;
//                 case 3:
//                     player.ships.push(new Ship('Submarine', 3, isHorizontal, loc.getLoc()))
//                     break;
//                 case 4:
//                     player.ships.push(new Ship('Destroyer', 5, isHorizontal, loc.getLoc()))
//                     break;    
//             }
//         }
//     } else {
//         console.log('cell is occupied by another ship')
//     }
//     updateBoard(player)
// }

// function mouseoverHandle(e, player, isHorizontal) {

//     loc.clearLoc();
//     const cells = document.querySelectorAll('.board-cell');
//     hoverEffectRemover()
//     const counter = player.ships.length;
//     let length;
//     switch(counter) {
//         case 0:
//             length = 5;
//             break;
//         case 1:
//             length = 4;
//             break;
//         case 2:
//             length = 3;
//             break;
//         case 3:
//             length = 3;
//             break;
//         case 4:
//             length = 2;
//             break;    
//     }

    
//     let num = parseInt(e.target.dataset.cellnumber);
//     let overFlowNum = 10 - length;
//     let hCellNum = num % 10;
//     for(let x = 0; x < length; x++) {
        
//         if(isHorizontal) {
//             if(hCellNum <= overFlowNum) {
//                 loc.currentLoc.push(num);
//                 cells[num++].classList.add('hover-cell');
//             } else {
//                 console.log('madi')
//             }
            
//         } else {
//             try {
//                 cells[num].classList.add('hover-cell');
//                 loc.currentLoc.push(num);
//                 num+=10;
//             } catch(err) {
//                 hoverEffectRemover()
//             }
//         }
//     }
// }

// function checkCellIfAvaible(player) {
//     const allCoord = [];
//     let test = [];
//     player.ships.forEach(ship => {
//         ship.location.forEach(loc => allCoord.push(loc))
//     }) 

//     loc.currentLoc.forEach(loc => {
//         allCoord.forEach(x => {
//             if(loc == x) {
//                 test.push(loc)
//             }
//         })
//     })
//     return test
// }

// function updateBoard(player) {
//     const cells = document.querySelectorAll('.board-cell');
//     player.ships.forEach(ship => {
//             ship.location.forEach(cellNum => {
//                 cells[cellNum].classList.add('ship-cell')
//             })
//     })
//     if(player.ships.length === 5) {
//         console.log(ai.ships)
//         gameStart(player);
//     }
// }



// function hoverEffectRemover() {
//     const cells = document.querySelectorAll('.board-cell');
//     cells.forEach(cell => {
//         cell.classList.remove('hover-cell')
//     })
// }

// const loc ={
//     currentLoc: [],

//     clearLoc() {
//         this.currentLoc = [];
//     },

//     getLoc() {
//         return this.currentLoc;
//     },

// }

// function gameStart(player) {
//     const game = new Game(player, ai);

//     game.gameStart();
//     game.getAIShips()
// }

const main = document.querySelector('.main');
const inputName = document.querySelector('.inputPlayerName');

inputName.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerName = document.querySelector('.nameText').value;
    const playerOne = new Player(playerName);
    const AI = new Player('AI');

    const boards = document.createElement('div');
    boards.classList.add('boards-all');

    
    playerOne.board.allShipDeploy(playerOne.ships);
    AI.board.allShipDeploy(AI.ships)

    const game = new Game(playerOne, AI);

    const playerBoard = game.getPlayerBoard();
    const you = document.createElement('h1');
    you.innerText = "YOU"
    you.classList.add('board-name')
    playerBoard.prepend(you)
    playerBoard.classList.add('player-board');
    
    const aiBoard = game.getAiBoard();
    const ai = document.createElement('h1');
    ai.classList.add('board-name')
    ai.innerText = "AI"
    aiBoard.classList.add('ai-board');
    aiBoard.prepend(ai);

    inputName.remove()



    const vs = document.createElement('h2');
    vs.innerText = "VS"
    boards.append(playerBoard);
    boards.append(vs)
    boards.append(aiBoard);

    main.append(boards)

    game.start();
})
