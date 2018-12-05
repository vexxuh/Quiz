/* This class holds the timer logic for the game */
/* Create slider for the user to adjust how much time is given */
export default class Timer {
     time() {
        let now = new Date().getTime();
        let currentCount = 0;
        let maxTime = 10000; // Must be in Milliseconds.

        while (currentCount < maxTime) {
            currentCount = now + 1;
        }
        return currentCount;
    }
}