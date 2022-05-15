import Player from './Player.js'
document.querySelector('.inputPlayerName').addEventListener('submit', (e) => {
    e.preventDefault()
    const p1 = new Player(document.querySelector('.nameText').value);
    const modal = document.querySelector('.modal-bg');
    
    modal.appendChild(p1.board);
    
    p1.placeShip()
})