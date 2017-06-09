const http = require('http');
const express = require('express');
const app = express();
const routes = require('./routes');

class Server {
  constructor () {
    this.host = '127.0.0.1';
    this.port = 7777;
  }
  run () {
    routes(app, {});
    app.listen(this.port, () => console.log("Server is running on " + this.port));
  }
}

(new Server()).run();
