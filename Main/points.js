import {Timer} from "./timer";

// Create a slider for the number of points you can get for both base points and the timer bonus points
let basePoints = 10;
let setBonusPoints = 5;
let bonusPoints = 0;
let totalPoints;
let maxTime = 10000;

Timer.countTimer = function() {};
const timerVar = setInterval(Timer.countTimer(), maxTime);


function points() {
    bonusPoints = setBonusPoints / timerVar;
    totalPoints = basePoints + bonusPoints;
    console.log(totalPoints);
    clearInterval(timerVar);
}

points();