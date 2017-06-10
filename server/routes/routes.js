const chalk = require('chalk');
const ObjectID = require('mongodb').ObjectID;
const getFormattedCode = require('../core/CodeGen.js').getCode;
/**
* @param {Object} app - express instance
* @param {Object} db - database
*/

module.exports = (app, db) => {
  //show uploaded code
  app.get('/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('GET:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    db.collection('source').findOne(query)
      .then(item => res.send(item))
      .catch(err => res.send(err));
  });
  //upload code
  app.post('/', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('POST:') + req.url);
      console.log(chalk.blue('Body: ') + JSON.stringify(req.body));
    }
    const inCode = {lang: req.body.lang, code: req.body.code};
    db.collection('source').insert(inCode)
      .then(result => res.send(result.ops[0]))
      .catch(err => res.send({error: err}));
  });
  //edit uploaded code
  app.put('/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('PUT:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    const lang = db.collection('source').findOne(query)
      .then(item => {
        const editedCode = {
          lang: req.body.lang,
          code: req.body.code};
        db.collection('source').update(query, editedCode)
          .then(result => res.send(result))
          .catch(err => res.send({error: err}));
      });
  });
  // app.delete('/:id');
}
