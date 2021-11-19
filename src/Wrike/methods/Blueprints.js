class Blueprints {
  constructor(client) {
    this.client = client;
    this.endPoint = "/folder_blueprints"
  }

  async GetFolderBlueprintsTree(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async FolderBlueprintLaunchAsync(id, params = {}) {
    return await this.client.post(this.endPoint + "/" + id + "/launch_async", params);
  }
}

module.exports = Blueprints;