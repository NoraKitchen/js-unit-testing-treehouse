var expect = require("chai").expect;

describe("check if ship already present", function () {
    //import the function you will be testing ---checkForShip
    var checkForShip = require('../game_logic/ship_methods').checkForShip;

    it('should correctly report no ship at a given players coordinate', function () {

        //make an example player obj to test with
        var player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        }

        expect(checkForShip(player, [9, 9])).to.be.false;
    })

    it('should correctly report a ship is present at given location', function () {

        //make an example player obj to test with
        var player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        }

        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    })

    it('should handle ships located at more than one coordinate', function () {

        //make an example player obj to test with
        var player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                }
            ]
        }

        //normally you don't have more than one expectation here cause it might be unclear what it's trying to prove
        //but for brevity this one is decently clear?
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [9, 9])).to.be.false;
    })

    it('should handle checking multiple ships', function () {

        //make an example player obj to test with
        var player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                },
                {
                    locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                }
            ]
        }

        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
        expect(checkForShip(player, [9, 9])).to.be.false;
    })

})

describe("damageShip", function () {
    var damageShip = require("../game_logic/ship_methods").damageShip;

    it("should register damage on a given ship on a given location", function () {
        var ship = {
            locations: [[0, 0]],
            damage: []
        }

        //our previous way of writing expectations won't work here, cause this function doesn't return anything, just alters damage array on ship
        //chai has a built in method to check for empty objects/arrays/strings - empty
        damageShip(ship, [0, 0])

        expect(ship.damage).to.not.be.empty;
        //here we weant to check if the coordinates have been added to the damage array
        //this is a little touch cause arrays with identical values are still not strictly equal
        //what we want is 'deep equality' instead of strict. and chai has method for that.
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    })
})

describe("fire", function () {
    var fire = require("../game_logic/ship_methods").fire;

    // it("should identify if firing coordinates hit a ship or not", function () {

    // })

    it("should record damage on given players ship at given coordinate", function () {

        var player = {
            ships: [
                {
                    locations: [[0, 0]],
                    damage: []
                }
            ]
        }

        fire(player, [0, 0]);

        expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
    })

    it("ship should remain unscathed if not hit", function () {

        var player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        }

        fire(player, [1, 1]);

        expect(player.ships[0].damage).to.be.empty;
    })

})