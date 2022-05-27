export default class Game {
    constructor(player, ai) {
        this.ai = ai;
        this.player = player;
    }
    
    gameStart() {
        this.player.attackCell(this.ai, 12); 
    }

    getAIShips() {
        this.ai.ships.forEach(x => {
            console.log(x)
        })
    }
}