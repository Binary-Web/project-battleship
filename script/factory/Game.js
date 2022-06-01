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
             
             if(result === 'missed') {
                 e.target.classList.add('missed-cell')
             } else if (result === 'attacked'){
                 e.target.classList.add('attacked-cell');
             }

             const playerWin = this.isPlayerWinner();
             if(playerWin) {
                 this.declareWinner('player');
             } else {
                 this.aiRandomAttack();
             }
         })
    }

    aiRandomAttack() {
        const y = Math.floor(Math.random() * 10);
        const x = Math.floor(Math.random() * 10);
        const boardCell = document.querySelector(`.x-${x}.y-${y}`);
        
        const cellStatus = boardCell.getAttribute('status');


        //if the random cell is already taken it runs the function again
        if(cellStatus !== 'done'){
            const result = this.ai.attack(this.player.board, y, x);

            if(result === 'missed') {
                boardCell.classList.add('missed-cell');
            } else if (result === 'attacked'){
                boardCell.classList.add('attacked-cell');
    
                const aiWin = this.isAiWinner();
                if(aiWin) {
                    this.declareWinner('AI');
                }
                
            }

            boardCell.setAttribute('status', 'done');
        } else {
            console.log('again')
            this.aiRandomAttack()
        }

    }

    isPlayerWinner() {
        return this.ai.ships.every((ship) => ship.isSunk() === true)
    }

    isAiWinner() {
        return this.player.ships.every((ship) => ship.isSunk() === true)
    }

    declareWinner(winner) {
        console.log(`WINNER: ${winner}`)
    }
}