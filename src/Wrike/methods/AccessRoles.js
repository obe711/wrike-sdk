class AccessRoles {
  constructor(client) {
    this.client = client;
    this.endPoint = "/access_roles"
  }

  async GetAccessRoles(params = {}) {
    return await this.client.get(this.endPoint, params);
  }
}

module.exports = AccessRoles;