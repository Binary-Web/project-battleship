import Player from './Player.js'
const playerName = document.querySelector('.inputPlayerName');

playerName.addEventListener('submit', (e) => {
    e.preventDefault()
    const p1 = new Player(document.querySelector('.nameText').value);
    console.log(p1)
})