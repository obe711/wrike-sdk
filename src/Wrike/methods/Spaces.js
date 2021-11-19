class Spaces {
  constructor(client) {
    this.client = client;
    this.endPoint = "/spaces"
  }

  async GetSpaces(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async GetSpace(id, params = {}) {
    return await this.client.get(this.endPoint + "/" + id, params);
  }

  async CreateSpace(params = {}) {
    return await this.client.post(this.endPoint, params);
  }

  async UpdateSpace(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }
}

module.exports = Spaces;