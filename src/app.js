const express = require("express");
const server = express();

server.name = "API";

server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    console.error(`[ERROR] ${status}: ${message}`);
    
    res.status(status).send({ error: message });
});

module.exports = server;