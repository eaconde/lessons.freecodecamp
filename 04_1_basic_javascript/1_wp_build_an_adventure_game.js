// http://www.freecodecamp.com/challenges/waypoint-build-an-adventure-game

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit === 1) {
        totalDamage += damageThisRound;
        console.log("You hit the dragon and inflicted " + damageThisRound + " damage for a total of " + totalDamage + "damage!");

        if (totalDamage >= 4) {
            console.log("You have killed the dragon! Congratulations!");
            slaying = false;
        } else {
           damageThisRound = Math.floor(Math.random()*5 + 1);
           youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("You failed killing the dragon. Try again...");
        slaying = false;
    }
}
