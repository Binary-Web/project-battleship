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
        const healthBarLength = shipLength;
        const isHorizontal = bool;

        start: while(true) {
            let temp = Math.floor(Math.random()*99) + 1;
        
            let tempLoc = []
    
            //21
            //getting the 2nd digit of the random first location---- ex. getting 1 from 21
            let x = temp % 10;
    
            //getting the 2nd digit of the random last location----- ex. getting 5 from 25 
            let a = (temp + shipLength - 1) % 10;
    
            let z = (temp + (shipLength * 10)) - 10;
    
            if(bool) {
                if(x > a) {
                    //call function again if it overflows
                    continue start
                }
            } else {
                console.log(`${z} > 99`)
                if(z > 99) {
                    //call function again if it overflows
                    
                    console.log('try again')
                    continue start
                }
            }
    
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
                continue start
            } else {
                return tempLoc;
                break;
            }
        }
        
    }

    checkLoc(loc) {
        
        let test = [];
        const allCoord = [];
        this.ships.forEach(ship => {
            //putting all taken cells to 'allCoord' var
            ship.location.forEach(coord => allCoord.push(coord))
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
        
    }

    getShips() {
        let a = []

        this.ships.forEach(ship => {
            console.log(ship.location)
        })
    }

}

const takenCells = {
    cells: [],
}