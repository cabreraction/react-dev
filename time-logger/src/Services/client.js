const getTimers = () => {
    return fetch('http://localhost:8080/api/timers')
        .then(res => res.json());
}

const createTimerRequest = (timer) => {
    fetch('http://localhost:8080/api/timers', {
        method: 'post',
        mode: "cors",
        body: JSON.stringify(timer),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res));
}

const startTimer = (timer) => {
    fetch('http://localhost:8080/api/timers/start', {
        method: 'post',
        body: JSON.stringify(timer),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res));
}

const stopTimer = (timer) => {
    fetch('http://localhost:8080/api/timers/stop', {
        method: 'post',
        body: JSON.stringify(timer),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res));
}

const updateTimerInfo = (timer) => {
    fetch('http://localhost:8080/api/timers', {
        method: 'put',
        body: JSON.stringify(timer),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res));
}

const deleteTimer = (timer) => {

}

const timersClient = {
    getTimers,
    createTimerRequest,
    startTimer,
    stopTimer,
    updateTimerInfo,
    deleteTimer
}

export default timersClient;