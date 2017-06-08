const http = require('http');

class Server {
  constructor () {
    this.host = '127.0.0.1';
    this.port = 3000;
  }

  createServer () {
    return http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
    });
  }
  listen () {
    this.createServer().listen(this.port, this.host, () => {
      console.log(`Server running at http://${this.host}:${this.port}/`);
    });
  }
}

module.exports = Server;
