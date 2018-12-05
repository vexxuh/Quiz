// Create a slider for the number of points you can get for both base points and the timer bonus points
let basePoints = 10;
let setBonusPoints = 5;
let bonusPoints = 0;
let totalPoints = 0;

function points() {
    bonusPoints = setBonusPoints / timer.time();
    totalPoints = basePoints + bonusPoints;
    console.log(totalPoints);
}

points();