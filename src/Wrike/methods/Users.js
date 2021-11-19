class Users {
  constructor(client) {
    this.client = client;
    this.endPoint = "/users"
  }

  async QueryUser(id, params = {}) {
    return await this.client.get(this.endPoint + "/" + id, params);
  }

  async ModifyUser(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }
}

module.exports = Users;