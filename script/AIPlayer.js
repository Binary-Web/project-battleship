import gameBoard from './factory/gameBoard.js';
import Ship from './factory/Ship.js'

export default class AI {
    constructor() {
        this.ships = []
        this.board = gameBoard();
    }

    createShips() {
        for(let x = 0; x <= 4; x++) {
            let bool = Math.random() < 0.5;
            switch(x) {
                case 0:
                    case 0:
                    this.ships.push(new Ship('Carrier', 5, bool, this.placeRandom(5, bool)))
                    break;
                case 1:
                    this.ships.push(new Ship('Battleship', 4, bool, this.placeRandom(4, bool)))
                    break;
                case 2:
                    this.ships.push(new Ship('Cruiser', 3, bool, this.placeRandom(3, bool)))
                    break;
                case 3:
                    this.ships.push(new Ship('Submarine', 3, bool, this.placeRandom(3, bool)))
                    break;
                case 4:
                    this.ships.push(new Ship('Destroyer', 5, bool, this.placeRandom(2, bool)))
                    break;    
            }
        }
    }

    placeRandom(shipLength, bool) {
        let temp = Math.floor(Math.random()*99) + 1;

        //21
        //getting the 2nd digit of the random first location---- ex. getting 1 from 21
        let x = temp % 10;

        //getting the 2nd digit of the random last location----- ex. getting 5 from 25 
        let a = (temp + shipLength - 1) % 10;

        let z = (temp + (shipLength * 10)) - 10;

        if(bool) {
            if(x > a) {
                //call function again if it overflows
                this.placeRandom(shipLength, bool);
            } else {
                console.log('it overflows horizontally')
            }
        } else {
            if(z > 99) {
                //call function again if it overflows
                this.placeRandom(shipLength, bool);
            } else {
                console.log('it overflows vertically')
            }
        }

        let tempLoc = []
        for(let x = 1; x <= shipLength; x++) {    
            if(bool) {
                tempLoc.push(temp);
                temp++;
            } else {
                tempLoc.push(temp);
                temp += 10;
            }
        }

        //if checkLoc returns an array with value
        if(this.checkLoc(tempLoc).length > 1) {
            this.placeRandom(shipLength, bool);
        } else {
            return tempLoc
        }
    }

    checkLoc(loc) {
        
        let test = [];
        try {
            const allCoord = [];
            console.log(this.ships)
            this.ships.forEach(ship => {
                //putting all taken cells to 'allCoord' var
                ship.location.forEach(loc => allCoord.push(loc))
            }) 
        
            //check if the random location is valid
            loc.forEach(a => {
                allCoord.forEach(x => {
                    if(a == x) {
                        //if test has a value it is NOT valid
                        test.push(a)
                    }
                })
            })
            return test
        } catch (err) {
            console.log(err)
            test.push('asd')
            return test
        }
        
    }

    getShips() {
        let a = []

        this.ships.forEach(ship => {
            a.push(ship.location)
        })

        return a
    }
}

const takenCells = {
    cells: [],
}

// let num = parseInt(e.target.dataset.cellnumber);
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