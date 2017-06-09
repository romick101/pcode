const routes = require("./routes.js");

module.exports = (app, db) => {
  routes(app, db);
};
