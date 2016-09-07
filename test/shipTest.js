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
})