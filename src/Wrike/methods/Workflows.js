class Workflows {
  constructor(client) {
    this.client = client;
    this.endPoint = "/workflows"
  }

  async QueryWorkflows(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async CreateWorkflow(params = {}) {
    return await this.client.post(this.endPoint, params);
  }

  async ModifyWorkflow(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

}

module.exports = Workflows;