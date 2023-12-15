// eslint-disable-next-line import/no-extraneous-dependencies
import Countdown from "countdown";

class CountdownTimer {
    constructor(duration, onEnd) {
        this.countdown = new Countdown({
            msgBefore : "Timer has not started yet",
            msgAfter : "Timer has ended",
        });
        this.onEnd = onEnd;

        this.countdown.start();
    }

    pause() {
        clearInterval(this.countdown.clearInterval);
        this.countdown.interval = null;
    }

    resume() {
        if(!this.countdown.interval) {
            this.countdown.start();
        }
    }

    getTime() {
        return this.timeLeft;
    }

    restart(duration) {
        this.countdown = new Countdown(duration);
        this.countdown.start();
    }

    destroy() {
        clearInterval(this.countdown.interval);
    }
}

export default function createNewCounter(duration,onEnd) {
    const newCountdownTimer = new CountdownTimer(duration,onEnd);
    return newCountdownTimer;
}