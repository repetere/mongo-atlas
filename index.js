
const querystring = require('querystring');
const util = require('util');

const {
  request,
  factories,
} = require('./lib');

class MongoAtlas {
  constructor(user, apikey) {
    this.user = querystring.escape(user);
    this.apikey = apikey;
  }
  async request(url, method, body, headers) {
    return await request(util.format(url, `${this.user}:${this.apikey}`), {
      method,
      body: (body) ? JSON.stringify(body) : undefined,
      headers: Object.assign({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }, headers),
    });
  }
}

Object.keys(factories).forEach(method => {
  MongoAtlas.prototype[method] = factories[method]();
});

module.exports = MongoAtlas;
