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

    getAiBoard() { return this.ai.board.displayBoard(true); }

    getPlayerBoard() { return this.player.board.displayBoard() }

    start() {
        const enemyBoard = document.querySelector('.ai-board');

         enemyBoard.addEventListener('click', (e) => {
             const y = e.target.getAttribute('y');
             const x = e.target.getAttribute('x');
             const result = this.player.attack(this.ai.board, y, x);
             console.log(result)
             if(result === 'missed') {
                 e.target.classList.add('missed-cell')
             } else {
                 e.target.classList.add('attacked-cell')
             }
         })
    }
}