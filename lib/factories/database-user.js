const { BASE_URL } = require('../constants');

function makeCreateDatabaseUser() {
  return async function createDatabaseUser(groupId, options) {
    const url = `${BASE_URL}/groups/${groupId}/databaseUsers`;
    const method = 'POST';
    const body = options;
    return await this.request(url, method, body);
  }
}

module.exports = {
  createDatabaseUser: makeCreateDatabaseUser,
};
