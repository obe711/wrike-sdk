class Comments {
  constructor(client) {
    this.client = client;
    this.endPoint = "/comments"
  }

  async QueryComments(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async QueryFolderComments(id, params = {}) {
    return await this.client.get("/folders/" + id + this.endPoint, params);
  }

  async QueryTaskComments(id, params = {}) {
    return await this.client.get("/tasks/" + id + this.endPoint, params);
  }

  async QueryContactComments(id, params = {}) {
    return await this.client.get("/contacts/" + id + this.endPoint, params);
  }

  async QueryCommentsByIds(ids, params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join(), params);
  }

  async CreateFolderComment(id, params = {}) {
    return await this.client.post("/folders/" + id + this.endPoint, params);
  }

  async CreateTaskComment(id, params = {}) {
    return await this.client.post("/tasks/" + id + this.endPoint, params);
  }

  async UpdateComment(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async DeleteComment(id, params = {}) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = Comments;