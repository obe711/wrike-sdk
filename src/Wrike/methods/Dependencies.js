class Dependencies {
  constructor(client) {
    this.client = client;
    this.endPoint = "/dependencies"
  }

  async QueryDependencies(id, params = {}) {
    return await this.client.get("/tasks/" + id + this.endPoint, params);
  }

  async QueryDependenciesByIds(ids, params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join(), params);
  }

  async CreateDependency(id, params = {}) {
    return await this.client.post("/tasks/" + id + this.endPoint, params);
  }

  async ModifyDependency(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async DeleteDependency(id, params = {}) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = Dependencies;