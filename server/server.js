const express = require("express");
const bodyParser = require("body-parser");

const app = global.app = express();
const server = require("http").createServer(app);

require('./router')(app)

server.listen(1717, () => {
    console.log("Node app start at port 1717")
})