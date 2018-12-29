
const { BASE_URL } = require('../constants');

function makeCreateOrganization() {
  return async function createOrganization(name) {
    const url = `${BASE_URL}/orgs`;
    const method = 'POST';
    const body = { name };
    return await this.request(url, method, body);
  }
}

function makeGetOrganizations() {
  return async function getOrganizations() {
    const url = `${BASE_URL}/orgs`;
    const method = 'GET';
    return await this.request(url, method);
  }
}

function makeGetOrganization() {
  return async function getOrganization(orgId) {
    const url = `${BASE_URL}/orgs/${orgId}`;
    const method = 'GET';
    return await this.request(url, method);
  }
}

module.exports = {
  createOrganization: makeCreateOrganization,
  getOrganizations: makeGetOrganizations,
  getOrganization: makeGetOrganization,
};
