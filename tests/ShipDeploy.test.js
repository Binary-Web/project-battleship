import ShipDeploy from '../script/factory/ShipDeploy';
const testShips = ShipDeploy();
test('test', () => {
    expect(testShips[1].getStatus()).toStrictEqual({
        Name: "Battleship",
        Health: ["o", "o", "o", "o",]
    })
})

test('hit carrier in index 0', () => {
    testShips[0].hit(4);
    expect(testShips[0].getStatus()).toStrictEqual({
        Name: "Carrier",
        Health: ["o", "o", "o", "o", "x",]
    })
})