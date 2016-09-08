

function checkForShip(player, coordinates) {
    for (var i = 0; i < player.ships.length; i++) {
        //for every ship the player has placed...
        //it looks at each coordinate that ship is on, and if it matches the coordinates, that coordinate becomes part of the shipPresent array returned
        var currentShip = player.ships[i];
        var shipPresent = currentShip.locations.filter(function (playerShipCoordinates) {
            //remember, .filter is run on an array and returns an array ---arg is a function that returns true or false--the resulting array is composed of all array items the test function returned true for
            return (playerShipCoordinates[0] === coordinates[0] && (playerShipCoordinates[1] === coordinates[1]));
            //so it will return any matches, thus if here are no matches, nothing will return
        })[0];

        if (shipPresent) {
            return currentShip
        }
    }
    return false
}

function damageShip(ship, coordinates) {
    ship.damage.push(coordinates);
}

function fire(opponent, coordinates){
    var ship = checkForShip(opponent, coordinates)

    if (ship) {
        damageShip(ship, coordinates);
    }
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;