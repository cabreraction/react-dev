// server dependencies
const http = require('http');
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
const PORT = process.env.PORT || 8080;
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE",
    "Access-Control-Max-Age": 2592000
}

// fs dependencies
const fs = require("fs");
const path = require("path");
const filepath = path.join(process.cwd(), "data.json");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.method === "GET") {
        if (req.url === "/api/timers") {
            return getTimers(res);
        } else {
            return error(res, 404);
        } 
    } else if (req.method === "POST") {
        switch(req.url) {
            case "/api/timers":
                return postTimers(req, res);
            case "/api/timers/start":
                return postTimerStart(req, res);
            case "/api/timers/stop":
                return postTimerStop(req, res);
            default:
                return error(res, 404);
        }
    } else if (req.method === "PUT") {
        if (req.url === "/api/timers") {
            return putTimers(req, res);
        } else {
            return error(res, 404);
        }
    } else if (req.method === "DELETE") {
        if (req.url === "/api/timers") {
            return deleteTimers(req, res);
        } else {
            return error(res, 404);
        }
    } else if (req.method === "OPTIONS") {
        res.writeHead(204, headers);
        res.end();
        return;
    } else {
        return error(res, 405);
    }

});

function getTimers(res) {
    const content = readContentFromFile("string");
    res.writeHead(200, headers);
    res.end(content);
}

function handleWriteOperations(req, res, featureFunction) {
    if (req.headers["content-type"] !== "application/json") {
        console.log(req.headers["content-type"]);
        error(res, 415);
        return;
    }

    let input = "";
    req.on("data", (chunk) => {
        input += chunk.toString();
    });

    req.on("end", () => {
        featureFunction(input);
        res.writeHead(200, headers);
        res.end(http.STATUS_CODES[200]);
    });
}

function postTimers(req, res) {
    handleWriteOperations(req, res, addTimerToSet);
}

function postTimerStart(req, res) {
    handleWriteOperations(req, res, startTimer);
}

function postTimerStop(req, res) {
    handleWriteOperations(req, res, stopTimer);
}

function putTimers(req, res) {
    handleWriteOperations(req, res, updateTimer);
}

function addTimerToSet(timerString) {
    const timer = JSON.parse(timerString);
    const content = readContentFromFile("array");
    content.push(timer);
    console.log('here');
    fileContent = JSON.stringify(content, null, 2);
    fs.writeFile(filepath, fileContent, () => console.log("done"));
}

function startTimer(timerString) {
    const timer = JSON.parse(timerString);
    const content = readContentFromFile("array");
    const modifiedContent = content.map(arrayTimer => {
        if (arrayTimer.id === timer.id) {
            return {
                ...arrayTimer,
                runningSince: timer.start
            }
        } else {
            return arrayTimer;
        }
    });
    fileContent = JSON.stringify(modifiedContent, null, 2);
    fs.writeFile(filepath, fileContent, () => console.log("done"));
}

function stopTimer(timerString) {
    const timer = JSON.parse(timerString);
    const content = readContentFromFile("array");
    const modifiedContent = content.map(arrayTimer => {
        if (arrayTimer.id === timer.id) {
            return {
                ...arrayTimer,
                runningSince: null,
                elapsed: arrayTimer.elapsed + (timer.stop - arrayTimer.runningSince)
            }
        } else {
            return arrayTimer;
        }
    });
    fileContent = JSON.stringify(modifiedContent, null, 2);
    fs.writeFile(filepath, fileContent, () => console.log("done"));
}

function updateTimer(timerString) {}

function deleteTimers(req, res) {}

function readContentFromFile(type) {
    const content = fs.readFileSync(filepath, "utf8");
    if (type === "string")
        return content;
    else 
        return JSON.parse(content);
}

function error(res, code) {
    res.statusCode = code;
    res.end(`{ "error": "${http.STATUS_CODES[code]}"}`);
}

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening on port ${server.address().port}`);    
});