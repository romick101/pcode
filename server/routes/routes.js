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
  app.post('/source', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('POST:') + req.url);
      console.log(chalk.blue('Body: ') + JSON.stringify(req.body));
    }
    const inCode = {
      name: req.body.name,
      lang: req.body.lang,
      code: req.body.code};
    db.collection('source').insert(inCode)
      .then(result => res.send(result.ops[0]))
      .catch(err => res.send({error: "Error in collection.insert"}));
  });
  //show uploaded code
  app.get('/source/:id', (req, res) => {
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
  app.get('/source', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('GET:') + req.url);
    }
    db.collection('source').find({}).toArray()
      .then(items => items === null ?
        res.send({error: "No items found"})
        :
        res.send(items))
      .catch(err => res.send({error: "Error in collection.find"}));
  });
  //edit uploaded code
  app.put('/source/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('PUT:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    db.collection('source').findOne(query)
      .then(item => {
        if (item === null) res.send({error: "No code retrieved by id"});
        else {
          const editedCode = {
            name: req.body.name,
            lang: item.lang,
            code: req.body.code};
          db.collection('source').update(query, editedCode)
            .then(result => res.send(result))
            .catch(err => res.send({error: "Error in collection.update"}));
          }})
      .catch(err => res.send({error: "Error in collection.findOne"}));
  });
  app.delete('/source/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('DELETE:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    db.collection('source').remove(query)
      .then(result => res.send(result))
      .catch(err => res.send({ error: "Error in collection.remove"}));
  });

  /**
  * actions with formatted code:
  * POST, GET, PUT, DELETE (todo)
  */
  //reformat uploaded code
  app.post('/source/formatted/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('POST:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    db.collection('source').findOne(query)
      .then(item => {
        if (item === null) res.send({error: "No code retrieved by id"});
        else {
          getFormattedCode(item.lang, item.code)
          .then(({ lang, code }) => {
            db.collection('formatted').findOne({name: item.name})
            .then( already => {
              if (already !== null) res.send(already);
              else db.collection('formatted').insert({
                    name: item.name,
                    lang,
                    code
                  }).then(result => res.send(result.ops[0]))
                    .catch(err => res.send({error: "Error in collection.insert"}));
              })
          })
          .catch(err => res.send({error: err}));
        }
      })
      .catch(err => res.send({error: "Error in collection.findOne"}));
  });
  //show reformatted code
  app.get('/source/formatted/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('GET:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    db.collection('formatted').findOne(query)
      .then(item => item === null ?
        res.send({error: "No code found by id"})
        :
        res.send(item))
      .catch(err => res.send({error: "Error in collection.findOne"}));
  });
  //edit formatted code
  app.put('/source/formatted/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('PUT:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    db.collection('formatted').findOne(query)
      .then(item => {
        if (item === null) res.send({error: "No code retrieved by id"});
        else {
          const editedCode = {
            name: req.body.name,
            lang: item.lang,
            code: req.body.code};
          db.collection('formatted').update(query, editedCode)
            .then(result => res.send(result))
            .catch(err => res.send({error: "Error in collection.update"}));
          }})
      .catch(err => res.send({error: "Error in collection.findOne"}));
  });
  app.delete('/source/formatted/:id', (req, res) => {
    if (process.env['DEBUG'] !== null ) {
      console.log(chalk.blue('DELETE:') + req.url);
    }
    const query = {'_id': new ObjectID(req.params.id)};
    db.collection('formatted').remove(query)
      .then(result => res.send(result))
      .catch(err => res.send({ error: "Error in collection.remove"}));
  });
}
