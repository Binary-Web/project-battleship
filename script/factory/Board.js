export default class Board {
    constructor(player) {
        this.boardOwner = player;
        // create a board 10x10, coords board[row][col] / board[y][x];
        this.arrBoard = Array(10).fill(null).map(() => Array(10).fill(null));
    }

    randomPlace(ship) {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);

        //horizontal if true
        const changePos = Math.random() > 0.5;
        if(changePos) ship.switchPosition();
        // console.log(`FROM: [${row}, ${col}]`)
        const deployed = this.deployShip(ship, row, col);
        if(!deployed) this.randomPlace(ship);
    }

    deployShip(ship, row, col) {
        const shipPosition = ship.getPosition();
        const valid = this.isValid(ship.length, ship.isHorizontal, row, col);
        if(valid) {
            console.log('valid')
            for(let i = 0; i < ship.length; i++) {
                const [y, x]= this.adjustCoord(ship.isHorizontal, row, col, i);

                this.arrBoard[y][x] = {ship, index: i}
            }

            return valid;
        } else {
            return valid;
        }
    }

    isValid(length, isHorizontal, row, col) {
        const cells = [];
        for(let i = 0; i < length; i++) {
            const [y, x]= this.adjustCoord(isHorizontal, row, col, i);

            //this to check if ship goes outside the board
            if(y < 10 && x < 10) {
                cells.push(this.arrBoard[y][x]);
                console.log(cells)
            } else {
                return false;
            }
        }

        //check if coord is taken;
        return cells.every((cell) => cell === null)
    }

    adjustCoord(isHorizontal, row, col, i) {
        let y = row;
        let x = col;
        if(isHorizontal) { 
            y = row + i;
            x = col;
        } else{
            y = row;
            x = col + i;
        }

        return [x, y]
    }

    updateDisplayBoard() {
        
        const displayBoard = document.createElement('div');
        displayBoard.classList.add('display-board')

        this.arrBoard.forEach(element => {
            const cellLine = document.createElement('div');
            cellLine.classList.add('horizontal-line');

            element.forEach(cell => {
                const boardCell = document.createElement('div');
                boardCell.classList.add('board-cell');
                boardCell.innerHTML = cell;
                cellLine.append(boardCell);
            })
            
            displayBoard.append(cellLine)
        })

        return displayBoard

    }
}