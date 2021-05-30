
const millisecondsToHuman = (elapsedString) => {
    let hours = ((elapsedString / 1000) / 60) / 60;
    const mod = hours % 1;
    hours = hours - mod;
    hours = hours < 10 ? `0${hours}` : hours;

    let minutes = mod * 60;
    const modSec = minutes % 1;
    minutes = minutes - modSec;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = Math.round(modSec * 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${hours}:${minutes}:${seconds}`;
}

export const helpers = {

    renderElapsedString: (elapsedString, runningSince = null) => {
        if (runningSince)
            elapsedString = elapsedString + Date.now() - runningSince;

        return millisecondsToHuman(elapsedString);
    },

    newTimer: (timer) => {
        return {
            ...timer,
            elapsed: 0,
            runningSince: null
        }
    }
}