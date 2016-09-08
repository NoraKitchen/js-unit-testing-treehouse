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

        expect(checkForShip(player, [0, 0])).to.be.true;
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
        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [0, 0])).to.be.true;
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

        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [1, 0])).to.be.true;
        expect(checkForShip(player, [1, 1])).to.be.true;
        expect(checkForShip(player, [2, 3])).to.be.true;
        expect(checkForShip(player, [9, 9])).to.be.false;
    })

})