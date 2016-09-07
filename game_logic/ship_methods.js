

function checkForShip(player, coordinates){
    for (var i = 0; i < player.ships.length; i++){
        var currentShip = player.ships[i];
        var shipPresent = currentShip.locations.filter(function(playerShipCoordinates){
            //remember, .filter is run on an array and returns an array ---arg is a function that returns true or false--the resulting array is composed of all array items the test function returned true for
            return (playerShipCoordinates[0] === coordinates[0] && (playerShipCoordinates[1] === coordinates[1]));
            //so it will return any matches, thus if here are no matches, nothing will return
        })[0];

        if (!shipPresent){
            return false
        }
    }

}

module.exports.checkForShip = checkForShip;