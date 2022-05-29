export default class Board {
    constructor(player) {
        this.boardOwner = player;
        // create a board 10x10, coords board[row][col] / board[y][x];
        this.arrBoard = Array(10).fill(null).map(() => Array(10).fill(null));
    }

    autoPlace(ship) {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        
        //horizontal if true
        const isHortizontal = Math.random() > 0.5;
    }

    isValid(length, isHorizontal, row, col) {
        const cells = [];

        for(let i = 0; i < length; i++) {
            const [x, y]= this.adjustCoord(isHorizontal, row, col, i);

            if(y < 10 && x < 10) {
                cells.push(this.arrBoard[y, x]);
            } else {
                return false;
            }
        }

        //check if coord is taken
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

        retun [x, y]
    }
}