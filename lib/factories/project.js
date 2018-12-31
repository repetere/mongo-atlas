
const querystring = require('querystring');

const { BASE_URL } = require('../constants');

function makeCreateProject() {
  return async function createProject(name, orgId) {
    const url = `${BASE_URL}/groups`;
    const method = 'POST';
    const body = { name, orgId };
    return await this.request(url, method, body);
  }
}

function makeGetProjects() {
  return async function getProjects() {
    const url = `${BASE_URL}/groups`;
    const method = 'GET';
    return await this.request(url, method);
  }
}

function makeGetProject() {
  return async function getProject(groupId) {
    const url = `${BASE_URL}/groups/${groupId}`;
    const method = 'GET';
    return await this.request(url, method);
  }
}

function makeAddIPWhitelistEntry() {
  /**
   * Adds an IP address to a the projects whitelist
   * @param {string} groupId Project ID
   * @param {Object} options
   * @param {string} options.ipAddress IP address to add to whitelist
   * @param {string} [options.comment] The comment associated with the whitelist entry
   * @param {string} [options.deleteAfterDate] ISO-8061 formatted datetime string after which IP will be removed from whitelist
   * @return {Object} Parsed JSON response from Mongo Atlas
   */
  async function addIPWhitelistEntry(groupId, options) {
    const url = `${BASE_URL}/groups/${groupId}/whitelist`;
    const method = 'POST';
    const body = options;
    return await this.request(url, method, body);
  }
  return addIPWhitelistEntry;
}

function makeDeleteIPWhitelistEntry() {
  return async function deleteIPWhitelistEntry(groupId, ipAddress) {
    const url = `${BASE_URL}/groups/${groupId}/whitelist/${querystring.escape(ipAddress)}`;
    const method = 'DELETE';
    return await this.request(url, method);
  }
}

module.exports = {
  createProject: makeCreateProject,
  getProjects: makeGetProjects,
  getProject: makeGetProject,
  addIPWhitelistEntry: makeAddIPWhitelistEntry,
  deleteIPWhitelistEntry: makeDeleteIPWhitelistEntry,
};
