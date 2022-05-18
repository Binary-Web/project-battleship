import Player from './Player.js'
document.querySelector('.inputPlayerName').addEventListener('submit', (e) => {
    e.preventDefault()
    const p1 = new Player(document.querySelector('.nameText').value);
    const modal = document.querySelector('.modal-bg');
    const main = document.querySelector('.main');

    main.append(p1.createShipSelection());
    main.append(p1.createBoard());
})