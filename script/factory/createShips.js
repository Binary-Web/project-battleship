import Ship from './Ship.js'
const fiveShips = [];
const ships = [
    {
        name: "Carrier",
        length: 5
    },
    {
        name: "Battleship",
        length: 4
    },
    {
        name: "Cruiser",
        length: 3
    },
    {
        name: "Submarine",
        length: 3
    },
    {
        name: "Destroyer",
        length: 2
    },
]

export default function createShips() {
    ships.forEach(element => {
        fiveShips.push(new Ship(element.name, element.length));
    })
    return fiveShips;
}