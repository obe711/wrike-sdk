class Approvals {
  constructor(client) {
    this.client = client;
    this.endPoint = "/approvals"
  }

  async GetApprovals(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async GetFolderApprovals(params = {}) {
    return await this.client.get("/folders/" + id + this.endPoint, params);
  }

  async GetTaskApprovals(params = {}) {
    return await this.client.get("/tasks/" + id + this.endPoint, params);
  }

  async GetApprovalsByIds(params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join(), params);
  }


  async CreateFolderApproval(id, params = {}) {
    return await this.client.post("/folders/" + id + this.endPoint, params);
  }

  async CreateTaskApproval(id, params = {}) {
    return await this.client.post("/tasks/" + id + this.endPoint, params);
  }

  async UpdateApproval(id, params) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async DeleteApproval(id, params) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = Approvals;