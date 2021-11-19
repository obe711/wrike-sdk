class Tasks {
  constructor(client) {
    this.client = client;
    this.endPoint = "/tasks"
  }

  async QueryTasks(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async QueryFolderTasks(params = {}) {
    return await this.client.get("/folders/" + id + this.endPoint, params);
  }

  async QuerySpaceTasks(params = {}) {
    return await this.client.get("/spaces/" + id + this.endPoint, params);
  }

  async QueryTasksByIds(params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join(), params);
  }

  async QueryTasksFieldsHistory(params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join() + "/tasks_history", params);
  }

  async CreateTask(id, params = {}) {
    return await this.client.post("/folders/" + id + this.endPoint, params);
  }

  async ModifyTask(id, params) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async ModifyTasks(ids, params) {
    return await this.client.put(this.endPoint + "/" + ids.join(), params);
  }

  async DeleteTask(id, params) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = Tasks;