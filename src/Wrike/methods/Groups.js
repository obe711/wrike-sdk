class Groups {
  constructor(client) {
    this.client = client;
    this.endPoint = "/groups"
  }

  async QueryGroups(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async QueryGroup(id, params = {}) {
    return await this.client.get(this.endPoint + "/" + id, params);
  }

  async CreateGroup(params = {}) {
    return await this.client.post(this.endPoint, params);
  }

  async ModifyGroup(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async DeleteGroup(id, params = {}) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = Groups;