
const querystring = require('querystring');

const { BASE_URL } = require('../constants');

function makeGetUserById() {
  return async function getUserById(id) {
    const url = `${BASE_URL}/users/${id}`;
    const method = 'GET';
    return await this.request(url, method);
  }
}

function makeGetUserByName() {
  return async function getUserByName(name) {
    const url = `${BASE_URL}/users/byName/${querystring.escape(name)}`;
    const method = 'GET';
    return await this.request(url, method);
  }
}

/**
 * @enum {OrgRoleName}
 */
const ORG_ROLE_NAME_ENUM = {
  ORG_OWNER: 'ORG_OWNER',
  ORG_GROUP_CREATOR: 'ORG_GROUP_CREATOR',
  ORG_BILLING_ADMIN: 'ORG_BILLING_ADMIN',
  ORG_READ_ONLY: 'ORG_READ_ONLY',
  ORG_MEMBER: 'ORG_MEMBER',
};

/**
 * @enum {ProjectRoleName}
 */
const PROJECT_ROLE_NAME_ENUM = {
  GROUP_OWNER: 'GROUP_OWNER',
  GROUP_READ_ONLY: 'GROUP_READ_ONLY',
  GROUP_DATA_ACCESS_ADMIN: 'GROUP_DATA_ACCESS_ADMIN',
  GROUP_DATA_ACCESS_READ_WRITE: 'GROUP_DATA_ACCESS_READ_WRITE',
  GROUP_DATA_ACCESS_READ_ONLY: 'GROUP_DATA_ACCESS_READ_ONLY',
};


function makeCreateUser() {
  /**
   * Creates a Mongo Atlas user
   * @param {Object} options
   * @param {string} options.username The Atlas username
   * @param {string} options.password The Atlas user's password
   * @param {string} options.country  ISO 3166-1 alpha 2 country code of country of residence
   * @param {string} options.emailAddress The Atlas user's email address
   * @param {string} options.mobileNumber The Atlas user's mobile phone number
   * @param {string} options.firstName The Atlas user's first name
   * @param {string} options.lastName The Atlas user's last name
   * @param {Object[]} options.roles Each object in the array represents either an Atlas organization or project the Atlas user is assigned to and the Atlas role has for the associated organization or project
   * @param {string} options.roles.orgId 	The unique identifier of the organization (can only specify either orgId or groupId per role)
   * @param {string} options.roles.groupId The unique identifier for the project (can only specify either orgId or groupId per role)
   * @param {OrgRoleName|ProjectRoleName} options.roles.roleName The name of the role
   * @return {Object} Parsed JSON response from Mongo Atlas
   */
  async function createUser(options) {
    const url = `${BASE_URL}/users`;
    const method = 'POST';
    const body = options;
    return await this.request(url, method, body);
  }
  return createUser;
}

function makeUpdateUser() {
  return async function updateUser(userId, options) {
    const url = `${BASE_URL}/users/${userId}`;
    const method = 'PATCH';
    const body = options;
    return await this.request(url, method, body);
  }
}

function makeGetUserAPIKeys() {
  return async function getUserAPIKeys(userId) {
    const url = `${BASE_URL}/users/${userId}/keys`;
    const method = 'POST';
    return await this.request(url, method);
  }
}

function makeCreateUserAPIKey() {
  return async function createUserAPIKey(userId, description = 'API access for user') {
    const url = `${BASE_URL}/users/${userId}/keys`;
    const method = 'POST';
    const body = { description };
    return await this.request(url, method, body);
  }
}

function makeEnableUserAPIKey() {
  return async function enableUserAPIKey(userId, keyId) {
    const url = `${BASE_URL}/users/${userId}/keys/${keyId}`;
    const method = 'PATCH';
    const body = { enabled: true };
    return await this.request(url, method, body);
  }
}

function makeDeleteUserAPIKey() {
  return async function deleteUserAPIKey(userId, keyId) {
    const url = `${BASE_URL}/users/${userId}/keys/${keyId}`;
    const method = 'DELETE';
    return await this.request(url, method);
  }
}

function makeDisableUserAPIKey() {
  return async function disableUserAPIKey(userId, keyId) {
    const url = `${BASE_URL}/users/${userId}/keys/${keyId}`;
    const method = 'PATCH';
    const body = { enabled: false };
    return await this.request(url, method, body);
  }
}

module.exports = {
  getUserById: makeGetUserById,
  getUserByName: makeGetUserByName,
  createUser: makeCreateUser,
  updateUser: makeUpdateUser,
  getUserAPIKeys: makeGetUserAPIKeys,
  createUserAPIKey: makeCreateUserAPIKey,
  enableUserAPIKey: makeEnableUserAPIKey,
  disableUserAPIKey: makeDisableUserAPIKey,
  deleteUserAPIKey: makeDeleteUserAPIKey,
};
