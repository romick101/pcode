const chalk = require('chalk');
const ObjectID = require('mongodb').ObjectID;
const getFormattedCode = require('../core/CodeGen.js').getCode;
/**
* @param {Object} app - express instance
* @param {Object} db - database
*/

module.exports = (app, db) => {
  /**
  * actions with source code:
  * POST, GET, PUT, DELETE (todo)
  */
  //upload code
  app.post('/', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('POST:') + req.url);
      console.log(chalk.blue('Body: ') + JSON.stringify(req.body));
    }
    const inCode = {lang: req.body.lang, code: req.body.code};
    db.collection('source').insert(inCode)
      .then(result => res.send(result.ops[0]))
      .catch(err => res.send({error: "Error in collection.insert"}));
  });
  //show uploaded code
  app.get('/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('GET:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    db.collection('source').findOne(query)
      .then(item => item === null ?
        res.send({error: "No code found by id"})
        :
        res.send(item))
      .catch(err => res.send({error: "Error in collection.findOne"}));
  });
  //edit uploaded code
  app.put('/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('PUT:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    db.collection('source').findOne(query)
      .then(item => {
        if (item === null) res.send({error: "No code retrieved by id"});
        else {
          const editedCode = {
            lang: item.lang,
            code: req.body.code};
          db.collection('source').update(query, editedCode)
            .then(result => res.send(result))
            .catch(err => res.send({error: "Error in collection.update"}));
          }})
      .catch(err => res.send({error: "Error in collection.findOne"}));
  });
  // app.delete('/:id');

  /**
  * actions with formatted code:
  * POST, GET, PUT, DELETE (todo)
  */
  //reformat uploaded code
  app.post('/formatted', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('POST:') + req.url);
    }
    const query = {'_id': new ObjectID(req.body.id)};
    db.collection('source').findOne(query)
      .then(item => {
        if (item === null) res.send({error: "No code retrieved by id"});
        else {
          getFormattedCode(item.lang, item.code)
          .then(resCode => {
            db.collection('formatted').insert(resCode)
              .then(result => res.send(result.ops[0]))
              .catch(err => res.send({error: "Error in collection.insert"}));
          })
          .catch(err => res.send({error: err}));
        }
      })
      .catch(err => res.send({error: "Error in collection.findOne"}));
  });
  //show reformatted code
  app.get('/formatted/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('GET:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    db.collection('formatted').findOne(query)
      .then(item => item === null ?
        res.send({error: "No code found by id"})
        :
        res.send(item))
      .catch(err => res.send({error: err}));
  });
  //edit formatted code
  app.put('/formatted/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('PUT:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    db.collection('formatted').findOne(query)
      .then(item => {
        if (item === null) res.send({error: "No code retrieved by id"});
        else {
          const editedCode = {
            lang: item.lang,
            code: req.body.code};
          db.collection('formatted').update(query, editedCode)
            .then(result => res.send(result))
            .catch(err => res.send({error: "Error in collection.update"}));
          }})
      .catch(err => res.send({error: "Error in collection.findOne"}));
  });
}
