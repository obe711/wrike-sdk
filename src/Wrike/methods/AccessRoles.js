class AccessRoles {
  constructor(client) {
    this.client = client;
    this.endPoint = "/access_roles"
  }

  async Get(params = {}) {
    return await this.client.get(this.endPoint, params);
  }
}

module.exports = AccessRoles;