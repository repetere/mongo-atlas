
const organization = require('./organization');
const cluster = require('./cluster');
const project = require('./project');
const user = require('./user');
const databaseUser = require('./database-user');

module.exports = Object.assign({},
  organization,
  cluster,
  project,
  user,
  databaseUser,
);