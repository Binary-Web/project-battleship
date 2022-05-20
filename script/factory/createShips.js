import Ship from './Ship.js'
const fiveShips = [];
const ships = [
    {
        name: "Carrier",
        hitBoxes: 5
    },
    {
        name: "Battleship",
        hitBoxes: 4
    },
    {
        name: "Cruiser",
        hitBoxes: 3
    },
    {
        name: "Submarine",
        hitBoxes: 3
    },
    {
        name: "Destroyer",
        hitBoxes: 2
    },
]

export default function createShips() {
    ships.forEach(element => {
        fiveShips.push(new Ship(element.name, element.hitBoxes));
    })
    return fiveShips;
}