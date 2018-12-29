
const fetch = require('node-fetch');

const factories = require('./factories');

async function request(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`mongo atlas responded with an error ${response.status}: "${response.statusText}"`);
  }
  return await response.json();
}

module.exports = {
  request,
  factories,
};
