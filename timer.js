/* This class holds the timer logic for the game */
/* Create slider for the user to adjust how much time is given */
export class timer {
    static time() {
        let maxTime = 10000; // Must be in Milliseconds...
        let currentTotal = 0;
        for (let i = 0; i < maxTime; i++) {
            currentTotal = i;
        }
        return currentTotal;
    }
}