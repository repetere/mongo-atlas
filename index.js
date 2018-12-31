
const {
  request,
  factories,
} = require('./lib');

class MongoAtlas {
  constructor(user, apikey) {
    this.user = user;
    this.apikey = apikey;
  }
  async request(url, method, body, headers) {
    console.log(url, {
      method,
      body: (body) ? JSON.stringify(body) : undefined,
      headers: Object.assign({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(this.user + ':' + this.apikey).toString('base64')}`,
      }, headers),
    }, this.user, this.apikey);
    return await request(url, {
      method,
      body: (body) ? JSON.stringify(body) : undefined,
      headers: Object.assign({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(this.user + ':' + this.apikey).toString('base64')}`,
      }, headers),
    });
  }
}

Object.keys(factories).forEach(method => {
  MongoAtlas.prototype[method] = factories[method]();
});

module.exports = MongoAtlas;
