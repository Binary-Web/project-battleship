export default class Game {
    constructor(player, ai) {
        this.ai = ai;
        this.player = player;
    }

    // displayBothBoards() {
    //     const playerBoard = this.player.board.displayBoard();
    //     const aiBoard = this.ai.board.displayBoard();

    //     const boardContainer = document.createElement('div');
    //     boardContainer.classList.add('board-container');

    //     boardContainer.append(playerBoard);
    //     boardContainer.append(aiBoard);

    //     return boardContainer
    // }

    getAiBoard() { return this.ai.board.displayBoard(); }

    getPlayerBoard() { return this.player.board.displayBoard() }
}