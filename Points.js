let defaultPointValue = 0;
let maxPointValue = 20;

let bonusPoints = 5;


function Points() {
    basePoints();
    timerBonus();
}

function basePoints() {
    if (defaultPointValue === 0) {
        Console.log("Default Point Value is currently set to be: " + defaultPointValue);
        Console.log("Create a slider to increment the base point value!");
    } else if (defaultPointValue >= maxPointValue) {
        Console.log("The maxiumum points per round has been reached");
    }
}

function timerBonus() {
    Console.log("The current bonus points given are: " + bonusPoints);
    Console.log("Create a slider to adjust the bonus points given max");
}

Points();
