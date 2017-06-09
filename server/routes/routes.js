/**
  * @param {Object} app - express instance
  * @param {Object} db - database
  */

module.exports = (app, db) => {
  app.post('/', (req, res) => res.send('Code will be uploaded to the server'));
}
