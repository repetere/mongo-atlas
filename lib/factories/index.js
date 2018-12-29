
const organization = require('./organization');
const instance = require('./instance');
const project = require('./project');
const user = require('./user');

module.exports = Object.assign({},
  organization,
  instance,
  project,
  user
);