export const helpers = {

    renderElapsedString: (elapsedString) => {
        let hours = ((elapsedString / 1000) / 60) / 60;
        const mod = hours % 1;
        hours = hours - mod;
        let minutes = mod * 60;
        const modSec = minutes % 1;
        minutes = minutes - modSec;
        let seconds = Math.round(modSec * 60);
        return `${hours}:${minutes}:${seconds}`;
    },

    newTimer: (timer) => {
        return {
            ...timer,
            elapsed: 0,
            runningSince: null
        }
    }
}