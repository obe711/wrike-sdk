class Attachments {
  constructor(client) {
    this.client = client;
    this.endPoint = "/attachments"
  }

  async GetAttachments(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async GetFolderAttachments(params = {}) {
    return await this.client.get("/folders/" + id + this.endPoint, params);
  }

  async GetTaskAttachments(params = {}) {
    return await this.client.get("/tasks/" + id + this.endPoint, params);
  }

  async GetAttachmentsByIds(params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join(), params);
  }

  async DownloadWrikeAttachment(id, params = {}) {
    return await this.client.get(this.endPoint + "/" + id + "/download", params);
  }

  async DownloadAttachmentPreview(id, params = {}) {
    return await this.client.get(this.endPoint + "/" + id + "/preview", params);
  }

  async GetAccessUrl(id, params = {}) {
    return await this.client.get(this.endPoint + "/" + id + "/url", params);
  }

  async CreateWrikeFolderAttachment(id, params = {}) {
    return await this.client.post("/folders/" + id + this.endPoint, params);
  }

  async CreateWrikeTaskAttachment(id, params = {}) {
    return await this.client.post("/tasks/" + id + this.endPoint, params);
  }

  async UpdateAttachment(id, params) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async DeleteAttachment(id, params) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = Attachments;