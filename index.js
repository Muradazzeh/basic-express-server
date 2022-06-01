`use strict`
require ('dotenv').config();
const server = require("./Src/server")

let port = process.env.PORT || 3010;

server.start(port)