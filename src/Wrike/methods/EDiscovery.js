class EDiscovery {
  constructor(client) {
    this.client = client;
    this.endPoint = "/ediscovery_search"
  }

  async Search(params = {}) {
    return await this.client.post(this.endPoint, params);
  }
}

module.exports = EDiscovery;