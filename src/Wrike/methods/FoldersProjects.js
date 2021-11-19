class FoldersProjects {
  constructor(client) {
    this.client = client;
    this.endPoint = "/folders"
  }

  async GetFoldersTree(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async GetFoldersTreeById(id, params = {}) {
    return await this.client.get("/folders/" + id + this.endPoint, params);
  }

  async GetFoldersBySpaceId(id, params = {}) {
    return await this.client.get("/spaces/" + id + this.endPoint, params);
  }

  async QueryFoldersFieldsHistory(ids, params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join() + "/folders_history", params);
  }

  async GetFoldersByIds(params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join(), params);
  }

  async CreateFolder(id, params = {}) {
    return await this.client.post(this.endPoint + "/" + id + "/folders", params);
  }

  async CopyFolder(id, params = {}) {
    return await this.client.post("/copy_folder/" + id, params);
  }

  async CopyFolderAsync(id, params = {}) {
    return await this.client.post("/copy_folder_async/" + id, params);
  }

  async ModifyFolder(id, params) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async ModifyFolders(ids, params) {
    return await this.client.put(this.endPoint + "/" + ids.join(), params);
  }

  async DeleteFolder(id, params) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = FoldersProjects;