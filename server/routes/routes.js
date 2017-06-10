const chalk = require('chalk');

/**
  * @param {Object} app - express instance
  * @param {Object} db - database
  */

module.exports = (app, db) => {
  app.post('/upload', (req, res) => {
    debugger;
    console.log(chalk.blue('Request body: ') + JSON.stringify(req.body));
    res.send('Code will be uploaded to the server');
  });
}
