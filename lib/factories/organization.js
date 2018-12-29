
const { BASE_URL } = require('../constants');

function makeCreateOrganization() {
  return async function createOrganization(name) {
    const url = `${BASE_URL}/orgs`;
    const method = 'POST';
    const body = { name };
    return await this.request(url, method, body)
  }
}

module.exports = {
  createOrganization: makeCreateOrganization,
};
