const http = require('http');
const when = require('when');
const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const assert = require('assert');
const app = express();
const routes = require('./routes');

class Server {
  constructor () {
    this.host = '127.0.0.1';
    this.port = 7777;
    this.dbUrl = 'mongodb://localhost:27017/pcodedb'
  }
  configure () {
    return when.promise(resolve => {
      app.use(bodyParser.urlencoded({ extended: true}));
      app.use(bodyParser.json());
      resolve(true);
    });
  }
  connectToDB(){
    return when.promise((resolve, reject) => {
      mongo.connect(this.dbUrl, (err, db) => {
        if (err !== null) reject(err);
        console.log("Connected to Mongo server: " + this.dbUrl);
        resolve(db);
      });
    });
  }
  run () {
    this.configure()
      .then(_ => this.connectToDB()
        .then(db => {
          routes(app, db);
          app.listen(this.port, () => console.log("Server is running on " + this.port));
        }));
    }
}

(new Server()).run();
