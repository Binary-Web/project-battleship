export default class Board {
    constructor(player) {
        this.boardOwner = player;
        // create a board 10x10, coords board[row][col];
        this.arrBoard = Array(10).fill(null).map(() => Array(10).fill(null));
    }

    placeRandom(ship) {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);

        const isHortizontal = Math.random() > 0.5
    }
}