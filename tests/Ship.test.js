// const Ship = require('../script/factory/ShipMaker')
import Ship from '../script/factory/Ship'
const ship1 = new Ship("TESTING", 5);

test('ship1 getstatus', () => {
    expect(ship1.getStatus()).toStrictEqual({Name: "TESTING", Health: ["o", "o", "o", "o", "o",]})
})

test('ship1 hit in the middle', () => {
    ship1.hit(2)
    expect(ship1.getStatus()).toStrictEqual({Name: "TESTING", Health: ["o", "o", "x", "o", "o",]})
})