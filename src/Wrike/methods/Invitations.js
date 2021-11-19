class Invitations {
  constructor(client) {
    this.client = client;
    this.endPoint = "/invitations"
  }

  async QueryInvitations(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async CreateInvitation(params = {}) {
    return await this.client.post(this.endPoint, params);
  }

  async UpdateInvitation(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async DeleteInvitation(id, params = {}) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = Invitations;