// server dependencies
const http = require('http');
const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
const PORT = process.env.PORT || 8080;

// fs dependencies
const fs = require("fs");
const path = require("path");
const filepath = path.join(process.cwd(), "data.json");

const server = http.createServer((req, res) => {
    
    if (req.method === "GET") {
        if (req.url === "/api/timers") {
            return getTimers(res);
        } else {
            // error
        } 
    } else if (req.method === "POST") {
        switch(req.url) {
            case "/api/timers":
                break;
            case "/api/timers/start":
                break;
            case "/api/timers/stop":
                break;
            default:
                // error
                break;
        }
    } else if (req.method === "PUT") {
        if (req.url === "/api/timers") {

        } else {
            // error
        }
    } else if (req.method === "DELETE") {
        if (req.url === "/api/timers") {

        } else {
            // error
        }
    }

});

function getTimers(res) {
    // read from data.json
    const content = fs.readFileSync(filepath, "utf8");
    res.end(content);
}

function postTimers(res) {}

function postTimerStart(res) {}

function postTimerStop(res) {}

function putTimers(res) {}

function deleteTimers(res) {}

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening on port ${server.address().port}`);    
});