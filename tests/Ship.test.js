// const Ship = require('../script/factory/ShipMaker')
import Ship from '../script/factory/Ship'
const ship1 = new Ship("TESTING", 5);

test('ship1 getstatus', () => {
    ship1.placeShip([1,2,3,4,5])
    expect(ship1.getStatus()).toStrictEqual({Name: "TESTING", Health: ["o", "o", "o", "o", "o"],Position: "Horizontal", Location: [1,2,3,4,5]})
})

test('ship1 hit in the middle', () => {
    ship1.hit(2)
    expect(ship1.getStatus()).toStrictEqual({Name: "TESTING", Health: ["o", "o", "x", "o", "o",], Position: "Horizontal", Location: [1,2,3,4,5]})
})

test('ship1 rotate', () => {
    ship1.switchPosition()
    expect(ship1.getStatus()).toStrictEqual({Name: "TESTING", Health: ["o", "o", "x", "o", "o",], Position: "Vertical", Location: [1,2,3,4,5]})
})