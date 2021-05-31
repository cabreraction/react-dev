const getTimers = () => {
    return fetch('http://localhost:8080/api/timers')
        .then(res => res.json());
}

const createTimer = (timer) => {

}

const startTimer = (timer) => {

}

const stopTimer = (timer) => {

}

const updateTimerInfo = (timer) => {

}

const deleteTimer = (timer) => {

}

const timersClient = {
    getTimers,
    createTimer,
    startTimer,
    stopTimer,
    updateTimerInfo,
    deleteTimer
}

export default timersClient;