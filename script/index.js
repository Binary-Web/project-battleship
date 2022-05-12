import Player from './Player.js'
document.querySelector('.inputPlayerName').addEventListener('submit', (e) => {
    e.preventDefault()
    const p1 = new Player(document.querySelector('.nameText').value);
    const modal = document.querySelector('.modal-bg');
    
    const board = p1.createBoard();
    board.classList.add('board');
    console.log(modal);
    modal.appendChild(board);
})