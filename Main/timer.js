class Timer {
    static countTimer() {
        let totalSeconds = 0;

        ++totalSeconds;
        var hour = Math.floor(totalSeconds / 3600);
        var minutes = Math.floor((totalSeconds - hour * 3600) / 60);
        return totalSeconds - (hour * 3600 + minutes * 60); // Returns the seconds...
    }
}

export {Timer} from "./timer";