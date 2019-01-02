
const {
  DigestClient,
  factories,
} = require('./lib');

const ALGORITHM = 'MD5';

class MongoAtlas extends DigestClient {
  constructor(user, apikey) {
    super(user, apikey, { algorithm: ALGORITHM, });
  }
  async request(url, method, body, headers) {
    const response = await super.fetch(url, {
      method,
      body: (body) ? JSON.stringify(body) : undefined,
      headers: Object.assign({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }, headers),
    });
    if (!response.ok) {
      throw new Error(`mongo atlas responded with an error ${response.status}: "${response.statusText}"`);
    }
    return await response.json();
  }
}

Object.keys(factories).forEach(method => {
  MongoAtlas.prototype[method] = factories[method]();
});

module.exports = MongoAtlas;
