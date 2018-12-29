
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

module.exports = {
  createProject: makeCreateProject,
  getProjects: makeGetProjects,
  getProject: makeGetProject,
};
