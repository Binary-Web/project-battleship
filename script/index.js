import Player from './Player.js'
document.querySelector('.inputPlayerName').addEventListener('submit', (e) => {
    e.preventDefault();
    const container = document.querySelector('.modal-bg')
    const playerName = document.querySelector('.nameText').value
    const player = new Player(playerName);
    container.append(player.shipSelection())
    container.append(player.board)
})